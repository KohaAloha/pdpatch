uniform float K1,K2,K3,K4, freq;

uniform sampler2D tex0;


void main()
{


    vec2 C =  gl_TexCoord[0].st;

	float xs1 = sin(gl_TexCoord[0].s*gl_TexCoord[0].t/(abs(freq)+1.));
	float xs2 = sin(xs1*533.);
	float xs3 = sin(xs2*1013.);

	float ys1 = sin(gl_TexCoord[0].s*gl_TexCoord[0].t/(abs(freq)+1.));
	float ys2 = sin(ys1*5313.);
	float ys3 = sin(ys2*10113.);

    gl_FragColor = texture2D(tex0, C + K1 * 0.01 *vec2(xs3,ys3)) ;
}










