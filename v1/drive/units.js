class aUnit
{
	constructor(index)
	{

		this.speed = 1;//Math.random()*this.diam;

		this.idx = index;
		
		this.playing=false;

		this.vol = 1;
		this.pan = 1;

		this.fcount = audioCtx.sampleRate * 1;

		this.abuf = audioCtx.createBuffer(channels, this.fcount, audioCtx.sampleRate);
		
		this.gainNode = audioCtx.createGain();
		
		this.panner = new StereoPannerNode(audioCtx, pannerOptions);

		this.source = audioCtx.createBufferSource();
		



		let table = tables[ tabs[Math.floor(Math.random() * tabs.length)] ];
	
		// console.log("aRect["+this.idx+"]="+table);

		for (this.channel = 0; this.channel < channels; this.channel++)
		{
			this.nowBuffering = this.abuf.getChannelData(this.channel);
			
			for (var i = 0; i < this.fcount; i++)
			{
				let env = table[i%table.length] / (TOT_NUM) ;
				this.nowBuffering[i] = (Math.random() * 2 - 1) * env;
			}
		}
	



		this.gainNode.gain.value = this.vol;
		this.panner.pan.value = this.pan;

		this.source.buffer = this.abuf;



		this.source.connect(this.gainNode).connect(this.panner).connect(audioCtx.destination);


	}
	startNode() {
		this.playing=true;
		this.source.start();

		this.source.onended = () =>
		{
			this.playing=false;
		}
	}

	updateNode(event)
	{

		this.vol = event.beta / 180;
		this.pan = event.gamma / 180;
		
		console.log(this.pan,this.vol);



	}
}
