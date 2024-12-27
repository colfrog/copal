// Created by Pol Jeremias - poljere/2015
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

#define SOUND_MULTIPLIER 1.7

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform vec2 u_tex0Resolution;
uniform sampler2D u_tex1;
uniform vec2 u_tex1Resolution;

void main()
{
	vec2 uv = (gl_FragCoord.xy / u_resolution.xy);
	uv -= vec2(0.5);
	uv.x *= u_resolution.x/u_resolution.y;
	
	// Calculate polar coordinates
	float r = length(uv);
	float a = atan(uv.y, uv.x);
	   
	// Draw the lines
	const float it = 5.0;
	float c = 0.0;
	for( float i = 0.0 ; i < it ; i += 1.0 )
	{
		float i01 = i / it;
	float rnd = texture2D(u_tex0, vec2(i01)).x;
		float react = SOUND_MULTIPLIER * texture2D( u_tex1, vec2(i01, 0.0) ).x;	
		
		float c1 = (uv.x + 1.1 + react) * 0.004 * abs( 1.0 / sin( (uv.y +0.25) +
														 sin(uv.x * 4.0 * rnd + rnd * 7.0 + u_time * 0.75) *
																 (0.01 + 0.15*react)) );
		c = clamp(c + c1, 0.0, 1.0);
	}
	
	float s = 0.0;
	const float it2 = 20.0;
	for( float i = 0.0 ; i < it2 ; i += 1.0 )
	{
		float i01 = i / it2;	   
		float react = SOUND_MULTIPLIER * texture2D( u_tex1, vec2(i01, 0.0) ).x;  
	vec2 rnd = texture2D(u_tex0, vec2(i01)).xy;
		vec2 rnd2 = rnd - 0.5;
	  
		rnd2 = vec2(0.85*sin(rnd2.x * 200.0 + rnd2.y * u_time * 0.1), 
					-0.1 - 0.15 * sin(rnd2.x * rnd2.x * 200.0 + u_time  * rnd2.x * 0.25));
		
		float r1 = 1.0 - length(uv - rnd2);
		float rad = ( 1.0 - clamp(0.03 * rnd.y + react * 0.05, 0.0, 1.0) );

		r1 = smoothstep(rad, rad + 0.015, r1);
		s += r1;
	}
	
	
	// Calculate the final color mixing lines and backgrounds
	vec3 bg = mix( vec3(0.5, 0., 1.), vec3(0.5, 0., 0.7), r);
	bg = mix(bg, vec3(0., 0.7, 0.7), c);
	bg = mix(bg, vec3(1., 0.7, 0.), s);
	
	gl_FragColor = vec4(bg, 1.0);
}
