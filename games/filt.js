class aFilter
{
	constructor()
	{
		this.x_freq;
		this.x_q;
		this.c_coef1;
		this.c_coef2;
		this.c_gain=1;
		this.c_x1; //last
		this.c_x2; //prev
		// this.blocksize=64;
	}

	// adapted from Pure Data d_filter.c:274
	sigbp_qcos(f)
	{
		if (f >= -(0.5*PI) && f <= 0.5*PI)
		{
			let g = f*f;
			return (((g*g*g * (-1.0/720.0) + g*g*(1.0/24.0)) - g*0.5) + 1.0);
		}
		else return (0);
	}

	sigbp_docoef(f,q)
	{
		let r,oneminusr,omega;
		if (f < 0.001) f = 10;
		if (q < 0) q = 0;
		this.x_freq = f;
		this.x_q = q;
		omega = f * (TWO_PI) / samplerate;
		if (q < 0.001) oneminusr = 1.0;
		else oneminusr = omega/q;
		if (oneminusr > 1.0) oneminusr = 1.0;
		r = 1.0 - oneminusr;
		this.c_coef1 = 2.0 * this.sigbp_qcos(omega) * r;
		this.c_coef2 = - r * r;
		this.c_gain = 2 * oneminusr * (oneminusr + r * omega);
		// console.log("x_q:"+this.x_q+",x_freq:"+this.x_freq+",r:"+r+", omega:"+omega+", c_coef1:"+this.c_coef1+", c_coef2:"+this.c_coef2);
	}

	sigbp_perform(buffering)
	{
		let tbuf=buffering;
		let last  = this.c_x1;
		let prev  = this.c_x2;
		let coef1 = this.c_coef1;
		let coef2 = this.c_coef2;
		let gain  = this.c_gain;
		for (i = 0; i < tbuf.length; i++)
		{
			let noise = (Math.random() * 2 - 1);
			let output =  noise + coef1 * last + coef2 * prev;
			tbuf[i] = gain * output;
			prev = last;
			last = output;
		}
		this.c_x1 = last;
		this.c_x2 = prev;
		console.log(tbuf);
		return (tbuf);
	}

}