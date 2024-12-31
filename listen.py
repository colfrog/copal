#!/usr/bin/env python

import os
from subprocess import Popen
from pocketsphinx import LiveSpeech

active_process = None

commands = {
	'play': ['liskin-media.sh', 'play'],
	'idle': ['glslViewer',
		 '/home/laurent/src/copal/shaders/solines.frag',
		 '/home/laurent/src/copal/shaders/shadertoy-random-medium-tex.png',
		 '--audio', '--nocursor', '--noncurses', '--fullscreen'],
	'rickroll': ['mpv', '--fs', '/home/laurent/Videos/rickroll.mp4'],
	'exit': []
}

model_path = 'model'
speech = LiveSpeech(
	verbose=False,
	sampling_rate=16000,
	buffer_size=2048,
	no_search=False,
	full_utt=False,
	hmm=os.path.join(model_path, 'model_parameters/copal.ci_semi'),
	jsgf=os.path.join(model_path, 'etc/copal.jsgf'),
	dic=os.path.join(model_path, 'etc/copal.dic')
)

for phrase in speech:
	h = phrase.hyp()
	print(h.score, h.prob, h.hypstr)
	key = h.hypstr.split(' ')[1]
	if h.score >= 0.05 and key in commands.keys():
		if key == 'exit':
			if active_process is not None and active_process.poll() is None:
				active_process.terminate()
			active_process = None
		else:
			temp = active_process
			active_process = Popen(commands[key])
			if temp is not None and temp.poll() is None:
				temp.terminate()
