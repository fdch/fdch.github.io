Technical Requirements
======================

The performance requires two separate rooms, a recording room and multichannel space prepared for a walking audience.

Recording room
--------------

This space can be temporarily built on-site, with minimal acoustic treatement. It consists of an isolated environment with:

* A Raspberry Pi (RPI) computer connected to 
  * an audio interface, 
  * a button interface for the audience,
  * an ethernet router
* The audio interface needs to have 2 input and output channels
* A condenser microphone is connected to the audio interface
* The microphone has a pop screen and it is in the center of the room.
* Below the microphone, there is a music stand with the note for the audience.
* Hanging on the stand, there are sudio monitoring headphones.
* There is a dim light.


.. note:: 
  
  The RPI Computer broadcasts the audio to a main server computer which automatically tags, analyzes, compresses, and stores the recording and its analysis.


Main server
-----------

The main server computer is in charge of the audio analysis and cataloguing, as well as the music generation. This computer needs to:

* establish a local network with which the RPI computer connects. 
* connect to the main multichannel system for the audio generation. 

The software running the audio is `Pure Data <http://msp.ucsd.edu>`_, accessing each channel independently. Audio will be generated and spatialized **live**, and it will be sent to all channels, and there will be a live binaural rendering of the work for documentation.

Performance space
-----------------

The space will include an audio interface suitable for the number of channels. There must be at least 16 independent channels and one sub-frequency speaker with another dedicate channel. For each channel, there need to be a speaker. 

The speaker layout depends on the space, and many spaces provide their own setup. If the space is to be mounted, the speakers should surround the audience in two levels. The following may serve as guidelines on the disposition of the speakers. Speakers 1-8 are about 1.8m high and speakers 9-16 are about 2.5m high:


.. code-block::
       
       9          10         
          1    2 
  16                  11
      8           3

      7           4
  15                  12
          6    5 
      14          13

