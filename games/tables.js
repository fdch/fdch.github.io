let SMALL_NUM = 0.0000000009;
let t_exp = [];
let t_han = [];
let t_sin = [];
let t_lin = [];


function cos_tilde(f)
{
	return cos(TWO_PI * f);
}

function clip(num, min, max)
{
  return num <= min ? min : num >= max ? max : num;
}

function smoother(idx,sig,b)
{
	// return sig;
	let i = idx/2;
	return sig * (cos_tilde(i)*-0.5 + 0.5) * (cos_tilde((i+b/2)%b)*-0.5 + 0.5);
}

function normalize(table)
{
	// let ratio = Math.max.apply(Math,table) / 100.;

	let maxv=0;

	for (let i=0;i<table.length;i++)
	{
		let v = table[i];
		if(v>maxv)
			maxv=v;
		if (-v > maxv)
        	maxv = -v;
	}
	// console.log("max is :"+maxv);

	if (maxv > 0)
    {
		for (let i=0;i<table.length;i++)
		{
			table[i]/=maxv;
		}
    }



}

function sinc(b,sr,table)
{
	let sr2 = sr/2;
	for (let i=0;i<b;i++)
	{
		let s = (i-0.5) * TWO_PI;
		let o = clip((cos_tilde(s + 0.25) / (s - SMALL_NUM)) * -0.16,-1,1);
		table.push(smoother(i,o,b));
	}
	normalize(table);
}

function expo(b,sr,table)
{
	let srb = sr / b;
	let ph  = 1. / srb;
	for (let i=0;i<b;i++)
	{
		let iph = i+ph;
		table.push(1. - Math.exp(iph*2.));
	}
	normalize(table);
}

function hann(b,sr,table)
{
	let srb = sr / b;
	for (let i=0;i<b;i++)
	{
		table.push(smoother(i,(cos_tilde(i)*-0.5+0.5),srb))
	}
	normalize(table);
}

function liner(b,sr,table)
{

	for (let i=0;i<b;i++)
	{
		table.push((b-i)/b);
	}
}


	expo(128,samplerate,t_exp);
	hann(128,samplerate,t_han);
	sinc(128,samplerate,t_sin);
	liner(128,samplerate,t_lin);

	// console.log(t_exp);
	// console.log(t_han);
	// console.log(t_sin);