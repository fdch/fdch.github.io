class aDrop
{
	constructor(index)
	{
		this.x = Math.random()*windowWidth;
		this.y = Math.random()*windowHeight;
		this.speed = 1;//Math.random()*this.diam;

		this.idx = index;
		this.diam = Math.random() * 80 + 20;
		
		this.playing=false;
		this.color= 0;
		this.vol = 0;
		this.size = this.diam / TOT_NUM; // size of the audio buffer
		
		this.fcount = audioCtx.sampleRate * this.size;
		this.abuf = audioCtx.createBuffer(channels, this.fcount, audioCtx.sampleRate);
		
		this.gainNode = audioCtx.createGain();
		this.panner = new StereoPannerNode(audioCtx, pannerOptions);
		
		this.makeNoise();


		this.updateNode(this.x,this.y);


	}
	move()
	{
		this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
	}
	display(i)
	{
		fill(this.color);
		ellipse(this.x, this.y, this.diam,this.diam);
	}
	paint(mx,my)
	{
		this.d = Math.sqrt((this.x-mx)*(this.x-mx) + (this.y-my)*(this.y-my))
		if (this.d < this.diam/2)
		{
			if (mouseIsPressed) {
				this.x = mx;
				this.y = my;
				if(!this.playing)
				{
					this.makeNoise()
					this.playNode();
				}
			}
			if(this.playing)
			{
				this.updateNode(this.x,this.y);
			}
		}
	}
	makeNoise()
	{
		let Yoffset = map(this.y,0,height,-tabs.length,tabs.length);
		let tab = tabs[Math.floor(Math.abs(Yoffset))];
		
		let Xoffset = map(this.x,0,width,-40,40);
		
		let table=tables[tab];
		let f = Math.abs(Xoffset);

		// this.makeNoise(tables[this.tab],this.frq);

		console.log("aRect["+this.idx+"]="+tab+":"+f);
		for (this.channel = 0; this.channel < channels; this.channel++)
		{
			this.nowBuffering = this.abuf.getChannelData(this.channel);
			
			for (var i = 0; i < this.fcount; i++)
			{
				let env = table[i%table.length] / (TOT_NUM) ;
				if(f>0)
				{
					this.nowBuffering[i] = Math.cos(i/f) * env;
				} else
				{
					this.nowBuffering[i] = (Math.random() * 2 - 1) * env;
				}
			}
		}

	}
	playNode()
	{
		this.color = [0,255,0];
		this.playing=true;
		this.source.start();

		this.source.onended = () =>
		{
			this.playing=false;
			this.color = 0;
		}
	}
	updateNode(mx,my)
	{

		this.pan = map(mouseX,0,windowWidth,0,1);
		this.vol = map(mouseY,0,windowHeight,1,0);


		this.source = audioCtx.createBufferSource();

		this.source.buffer = this.abuf;


		this.gainNode.gain.value = this.vol;
		this.panner.pan.value = this.pan;

		this.source.connect(this.gainNode).connect(this.panner).connect(audioCtx.destination);

	}
}
