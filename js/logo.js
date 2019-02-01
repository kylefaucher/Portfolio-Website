
var text = new Blotter.Text("kyle faucher.", {
  family : "'Helvetica Neue', sans-serif",
  size : 65,
  fill : "#202020",
  weight: 500,
});

var material = new Blotter.ChannelSplitMaterial();
material.uniforms.uOffset.value = .09;
material.uniforms.uRotation.value = 90;

// var material = new Blotter.RollingDistortMaterial();
// material.uniforms.uSineDistortSpread.value = 1;
// material.uniforms.uSineDistortCycleCount.value = .3;
// material.uniforms.uSineDistortAmplitude.value = .13;
// material.uniforms.uNoiseDistortVolatility.value = 15;
// material.uniforms.uNoiseDistortAmplitude.value = .04;
// material.uniforms.uDistortPosition.value = [.39,.15];
// material.uniforms.uRotation.value = 52;
// material.uniforms.uSpeed.value = .060;


var blotter = new Blotter(material, {
  texts : text
});

var elem = document.getElementById("logo");
var scope = blotter.forText(text);

scope.appendTo(elem);
