// sprite fragment shader
#version 330 core

in vec2 texCoord;
in float fragDepth;

out vec4 FragColor;

uniform sampler2D texture1;
uniform vec4 colorMult = vec4(1.0);
uniform vec3 colorAdd = vec3(0.0);

uniform float fogStart = 10.0;
uniform float fogEnd = 120.0;

uniform float fadeStart = 80.0;
uniform float fadeEnd = 110.0;

void main()
{
	FragColor = texture(texture1, texCoord);
	FragColor.xyz += colorAdd;
	FragColor *= colorMult;

  	float fadeFactor = (fadeEnd - fragDepth) / (fadeEnd - fadeStart);
    float fogFactor = (fogEnd - fragDepth) / (fogEnd - fogStart);
  	FragColor.a *= fadeFactor;
  	FragColor.rgb *= fogFactor;

	if (FragColor.a == 0.0)
		discard;
}