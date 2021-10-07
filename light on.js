(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"light on_atlas_1", frames: [[0,0,512,287]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["light on_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Y5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(14,1,1).p("AM8AWIAADIAJfAWIDdAAA3NsKMAubAAAIAAYVMgubAAAgAM8jcIAADyIDeAAAwuAWIG6AA");
	this.shape.setTransform(148.55,99.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(11.4,1,1).p("AM5g4IGCAAIAABxImCAAgAy5g4IGBAAIAABxImBAAg");
	this.shape_1.setTransform(148.2,5.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FDC62E").ss(14,1,1).p("AM8AWIAADIAJfAWIDdAAA3NsKMAubAAAIAAYVMgubAAAgAM8jcIAADyIDeAAAwuAWIG6AA");
	this.shape_2.setTransform(148.55,99.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FDC62E").ss(11.4,1,1).p("AM5g4IGCAAIAABxImCAAgAy5g4IGBAAIAABxImBAAg");
	this.shape_3.setTransform(148.2,5.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-5.7,311.1,189.79999999999998);


(lib.Y4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(11.4,1,1).p("ApXBfIAFE2IDmAAICMDSIKTAAIAAi0IC0AAIAABkICMAAIBkiMIAAmtIh4huIh4AAIAACMIiMAAIAAj6Ij6AAIAAiMIk1AAIk2AAIAAC0IjSAAIAFE1Ii5AAAheoqIAKCgAtWjMIAAJrAnGpmILjAA");
	this.shape.setTransform(85.5,61.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FDC62E").ss(11.4,1,1).p("ApXBfIAFE2IDmAAICMDSIKTAAIAAi0IC0AAIAABkICMAAIBkiMIAAmtIh4huIh4AAIAACMIiMAAIAAj6Ij6AAIAAiMIk1AAIk2AAIAAC0IjSAAIAFE1Ii5AAAheoqIAKCgAtWjMIAAJrAnGpmILjAA");
	this.shape_1.setTransform(85.5,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-5.7,182.39999999999998,134.39999999999998);


(lib.Y3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(14,1,1).p("EAn8gEpIAAIvEAnmAL+QAADIizCNQiyCNj9AAQj9AAiziNQiziNAAjIQAAjICziOQCziND9AAQD9AACyCNQCzCOAADIgA8SJZIqCAAQg1hjgZhoQghiFAMiNQARjNBwjgIQ0AAIJ3uuIbuAAIM6OUAddlPIKfAAABdJSIS+AAIAAE6Iy+AAgA8AJZIgSAAAsHJZQAcBIAABSQAADGihCMQifCMjhAAQjjAAifiMQigiMAAjGQAAhSAchI");
	this.shape.setTransform(255.54,124.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.976)").s().p("ACyFVQiyiNAAjIQAAjHCyiNQCziND9AAQD9AACyCNQCzCNABDHQgBDIizCNQiyCNj9AAQj9AAiziNgANhiaQggAgAAAvQAAAtAgAfQAgAhAuAAQAuAAAhghQAggfAAgtQAAgvggggQghggguAAQguAAggAggAzDCPIAAk6IS+AAIAAE6g");
	this.shape_1.setTransform(386.9,201.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F8C22E").ss(14,1,1).p("EAn8gEpIAAIvEAnmAL+QAADIizCNQiyCNj9AAQj9AAiziNQiziNAAjIQAAjICziOQCziND9AAQD9AACyCNQCzCOAADIgA8SJZIqCAAQg1hjgZhoQghiFAMiNQARjNBwjgIQ0AAIJ3uuIbuAAIM6OUAddlPIKfAAABdJSIS+AAIAAE6Iy+AAgA8AJZIgSAAAsHJZQAcBIAABSQAADGihCMQifCMjhAAQjjAAifiMQigiMAAjGQAAhSAchI");
	this.shape_2.setTransform(255.54,124.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(253,198,46,0.976)").s().p("ACyFVQiyiNAAjIQAAjHCyiNQCziND9AAQD9AACyCNQCzCNABDHQgBDIizCNQiyCNj9AAQj9AAiziNgANhiaQggAgAAAvQAAAtAgAfQAgAhAuAAQAuAAAhghQAggfAAgtQAAgvggggQghggguAAQguAAggAggAzDCPIAAk6IS+AAIAAE6g");
	this.shape_3.setTransform(386.9,201.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,525.1,263.5);


(lib.Y2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(24,1,1).p("AOdsDQBoArBPApQAbAPAYAOQCvBmASBdQAEAVgEAVQgWBvkEBiQgFACgGACQjDA8iAAhQhYAVhkAUQiMAuhjAvQnpDsHpEZQBaAzB8A2QCXBADHBDAnssDQBoArBPApQAcAPAYAOQGsD7oFDDQgGACgFACQiEAwi/AtQhYAVhkAUAqohzQh/Ahg9AIQu9E6OkGRQCWBADIBDAlljQQjDA8iAAhAQjjQQiEAwi/AtQh/Ahg9AI");
	this.shape.setTransform(135.3693,253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(9,1,1).p("AKFAsIGsAAIAACPImsAAgAuRjjIirEOIAAHYMAilAAAIgdoQIidjWIGQAAAO5MSIgHAAQhOgCg5hQQgkg1gNhBIA/AAIAHAAANwJKIDBAAIh4DIARxJKQgNBBglA1QgYAjgcAUQgmAagsABAuRjjIEdouIUFAAIEeIuAv9A6IGsAAIAACOImsAAgA0+jjIGtAAIdAAAAt+MSIgGAAQhPgCg5hQQgjg1gNhBIBTBXgArGJKQgNBBglA1QgYAjgcAUQglAagtABAv9JKID4AAIh5DI");
	this.shape_1.setTransform(163.45,78.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.976)").s().p("AQYCrQgJBCgYA0IgGAMQgiBDgwADgAOZFzQg0gDglhPIgIgUQgKgBgJgGQgTgLgFgVQgEgSAHgRQAEgKAHgGIAFgFIAAgDIAGAAQAKgFAMABIADAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAMAAALAGIDBAAIh5DIgAuXFzgAuXFzIhshxQgOgogGgvID4AAIh4DIgAueFzQgzgDglhPQgHgPgGgQIBsBxgAsfCrQgIBCgZA0IgFAMQgjBDgvADgAwDECgAsfCrIAAAAgAwXjWIAAiOIGtAAIAACOgAJrjjIAAiPIGtAAIAACPg");
	this.shape_2.setTransform(165.975,120.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FDC62E").ss(9,1,1).p("AuRjjIirEOIAAHYMAilAAAIgdoQIidjWIGQAAAO5MSIgHAAQhOgCg5hQQgkg1gNhBIA/AAIAHAAANwJKIDBAAIh4DIARxJKQgNBBglA1QgYAjgcAUQgmAagsABAuRjjIEdouIUFAAIEeIuAKFAsIGsAAAv9A6IGsAAIAACOImsAAgA0+jjIGtAAIdAAAAt+MSIgGAAQhPgCg5hQQgjg1gNhBIBTBXgArGJKQgNBBglA1QgYAjgcAUQglAagtABAv9JKID4AAIh5DI");
	this.shape_3.setTransform(163.45,78.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FDC62E").ss(24,1,1).p("AOdsDQBoArBPApQAbAPAYAOQCvBmASBdQAEAVgEAVQgWBvkEBiQgFACgGACQjDA8iAAhQh/Ahg9AIQiMAuhjAvQnpDsHpEZQBaAzB8A2QCXBADHBDAnssDQBoArBPApQAcAPAYAOQGsD7oFDDQgGACgFACQiEAwi/AtQhYAVhkAUAqohzQh/Ahg9AIQu9E6OkGRQCWBADIBDAlljQQjDA8iAAhAQjjQQiEAwi/AtQhYAVhkAU");
	this.shape_4.setTransform(135.3709,253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(9,1,1).p("ADWhGIAACNImrAAIAAiN");
	this.shape_5.setTransform(249.325,90.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,0,0.976)").s().p("AQYCrQgJBCgYA0IgGAMQgiBDgwADgAOZFzQg0gDglhPIgIgUQgKgBgJgGQgTgLgFgVQgEgSAHgRQAEgKAHgGIAFgFIAAgDIAGAAQAKgFAMABIADAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAMAAALAGIDBAAIh5DIgAuXFzgAuXFzIhshxQgOgogGgvID4AAIh4DIgAueFzQgzgDglhPQgHgPgGgQIBsBxgAsfCrQgIBCgZA0IgFAMQgjBDgvADgAwDECgAsfCrIAAAAgAwXjWIAAiOIGtAAIAACOgAJrjjIAAiPIGtAAIAACPg");
	this.shape_6.setTransform(165.975,120.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-4.5,314.2,346.7);


(lib.Y1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(11.4,1,1).p("AB6AAQAAAygkAkQgjAkgzAAQgxAAgkgkQgjgkAAgyQAAgyAjgjQAkgkAxAAQAzAAAjAkQAkAjAAAyg");
	this.shape.setTransform(193.45,232.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(29,1,1).p("AAAoXIAAQv");
	this.shape_1.setTransform(191.4,125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(15,1,1).p("AXxg4IG7AAAFx0GIAJnIIuCAdIgMHjQDuhwEcAAQDJAACyA4QEUBXDcDcQFrFrAAIBQAAIAlrFrQlrFroAAAQoBAAlrlrQlrlrAAoAQAAoBFrlrQCiiiDAhZA23BIIn0AAAxSxZImek6Av8O9Ik7FJAg/VNIAAGCASaPLIE7FXAQozoIEQll");
	this.shape_2.setTransform(196.425,174.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,153,0.976)").s().p("AhVBWQgkgkAAgyQAAgyAkgjQAkgkAxAAQAyAAAkAkQAkAjgBAyQABAygkAkQgkAjgyAAQgxAAgkgjg");
	this.shape_3.setTransform(193.45,232.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FDC62E").ss(11.4,1,1).p("AB6AAQAAAygkAkQgjAkgzAAQgxAAgkgkQgjgkAAgyQAAgyAjgjQAkgkAxAAQAzAAAjAkQAkAjAAAyg");
	this.shape_4.setTransform(193.45,232.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FDC62E").ss(29,1,1).p("AAAoXIAAQv");
	this.shape_5.setTransform(191.4,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FDC62E").ss(15,1,1).p("AXxg4IG7AAAFx0GIAJnIIuCAdIgMHjQDuhwEcAAQDJAACyA4QEUBXDcDcQFrFrAAIBQAAIAlrFrQlrFroAAAQoBAAlrlrQlrlrAAoAQAAoBFrlrQCiiiDAhZA23BIIn0AAAxSxZImek6Av8O9Ik7FJAg/VNIAAGCAQozoIEQllASaPLIE7FX");
	this.shape_6.setTransform(196.425,174.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(253,198,46,0.976)").s().p("AhVBWQgkgkAAgyQAAgyAkgjQAkgkAxAAQAyAAAkAkQAkAjgBAyQABAygkAkQgkAjgyAAQgxAAgkgjg");
	this.shape_7.setTransform(193.45,232.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,407.9,363.6);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.345)").s().p("AgSgCIAfAAIAGAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgJADgIAAQgLAAgHgFg");
	this.shape.setTransform(218.7,254.515);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AgDAkIAAhNIAEAAQAAAYACAWQACAagIAKIAAgFg");
	this.shape_1.setTransform(164.0557,245.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.463)").s().p("AgBAbIAAgGIAAgvIADAAIAAAvIAAAGIgDAAg");
	this.shape_2.setTransform(163.95,239.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.725)").s().p("AAQADIgkAAIAAgFQAUAAAVACIAAADIgFAAg");
	this.shape_3.setTransform(197.175,210.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.329)").s().p("AgSgCIAgAAIAEAAIAAACQgKADgIAAQgLAAgHgFg");
	this.shape_4.setTransform(44.9,254.515);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.227)").s().p("AO8AMIAAgdQAKAMgHAWQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIAAgGgAu/ARQgCgRAAgRIAFAAIAAAdIAAAGIgDgBg");
	this.shape_5.setTransform(131.807,244.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.682)").s().p("AATADIgqAAIAAgFQAXAAAXACIABADIgFAAg");
	this.shape_6.setTransform(66.7,210.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.51)").s().p("ACCADIkJAAIAAgFQCHAACHACIAAADIgFAAg");
	this.shape_7.setTransform(131.55,284.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.459)").s().p("Aj7gEIFNAAICqAAQgCADgDAAQhAACg/AAQinAAinAEIgDAAQgXAAgLgJg");
	this.shape_8.setTransform(131.525,258.8511);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.769)").s().p("ABTADIlOAAIAAgFIFOAAQBSAABSACQADAAADADIiqAAg");
	this.shape_9.setTransform(132.05,261.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.271)").s().p("AAAASQgCgSAAgRQAIAGgDARIgBAGIAAAGIgCAAg");
	this.shape_10.setTransform(117.2375,236.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.035)").s().p("AAAAjQgCgjAAgjIAFAAIAABAIAAAGg");
	this.shape_11.setTransform(99.125,245.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.561)").s().p("AgCASIAAgGIAAgdQAIAIgEAVIAAAGIgEAAg");
	this.shape_12.setTransform(99.174,235.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.122)").s().p("AgCAYIAAgGIAAgpIAFAAIgBApIABAGIgFAAg");
	this.shape_13.setTransform(99.125,239.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.067)").s().p("AiPAGIAAgGQCKAACKgCQAFgBAFgCQAEALgJAAIkZAAg");
	this.shape_14.setTransform(131.849,238.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.722)").s().p("AgCAMIAAgdIAEAAIAAAGQAEAVgIAIIAAgGg");
	this.shape_15.setTransform(146.474,235.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.529)").s().p("AAAARQgCgRAAgRQAIAIgEAVIAAAGIgCgBg");
	this.shape_16.setTransform(61.974,156.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.176)").s().p("AgCASIAAgGIAAgdIAFAAIAAAdIAAAGIgFAAg");
	this.shape_17.setTransform(61.375,144.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.439)").s().p("AgCAMIAAgdIAEAAIAAAGQAEAVgIAIIAAgGg");
	this.shape_18.setTransform(62.524,134.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.616)").s().p("ACkADIlNAAIAAgFQCnAACmACQADAAADADIgGAAg");
	this.shape_19.setTransform(24.45,137.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.624)").s().p("AAKADIgZAAIAAgFQAPAAAQACIAAADIgGAAg");
	this.shape_20.setTransform(136.05,88.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.325)").s().p("AAQADIgkAAIAAgFIAkAAIAFAAIAAAFIgFAAg");
	this.shape_21.setTransform(132.325,88.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.518)").s().p("AALADIgaAAIAAgFIAaAAIAFAAIAAAFIgFAAg");
	this.shape_22.setTransform(128.6,88.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.502)").s().p("AgPgDQAPAAAPADIABACIgFABIgKABQgMAAgEgHg");
	this.shape_23.setTransform(139.25,69.2704);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.204)").s().p("ABqRrIAAgdQAJALgGAYQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAIAAgHgAhKxqIglAAIAAgGQAWAAAUACIABAEIgGAAg");
	this.shape_24.setTransform(141.3613,182.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.808)").s().p("AgPgCIAZAAIAGAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgPADgPAAIAAgFg");
	this.shape_25.setTransform(126.5,69.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.255)").s().p("AgPgCIAZAAIAGAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgJADgGAAQgKAAgFgFg");
	this.shape_26.setTransform(131.8,54.3441);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.733)").s().p("AgDCMQADilAAinIAEAAIAAFMIAAA1QgIgUABghg");
	this.shape_27.setTransform(122.8702,27.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.757)").s().p("AgDCJIAAlMQAIAPgBAbQgDClADCnQABAPgIACIAAg7g");
	this.shape_28.setTransform(140.7298,27.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.737)").s().p("Aj7V4IFOAAICqAAQgDADgDAAQg/ADhBAAQimAAinADIgCABQgZAAgKgKgAAT17IgqAAIAAgGIAqAAIAFAAIAAAGIgFAAg");
	this.shape_29.setTransform(132.05,140.9512);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.882)").s().p("AOFgEIFPAAIAQAAQgDADgDAAQhKAChKAAQhQAAhQADIgGABQgVAAgKgJgAzigEIFPAAIAQAAQgEADgCAAQhKAChLAAQhQAAhPADIgGABQgVAAgKgJg");
	this.shape_30.setTransform(132.05,157.2594);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.549)").s().p("AIIAMIAAgdIAFAAIABAGQADAUgJAJIAAgGgAoLASQgDgSAAgRIAFAAIAAAdIAAAGIgCAAg");
	this.shape_31.setTransform(131.874,152.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.533)").s().p("AgCAMIAAgdIAEAAIABAGQADAUgIAJIAAgGg");
	this.shape_32.setTransform(201.7471,156.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.169)").s().p("AK9AMIAAgdIAGAAIAAAGQADAUgJAJIAAgGgArAARQgCgRAAgRIAFAAIAAAdIAAAGIgDgBg");
	this.shape_33.setTransform(131.849,151.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.373)").s().p("AK+ASIAAgGIAAgdIAFAAIAAAdIAAAGIgFAAgArCASIAAgGIAAgdIAFAAIAAAdIAAAGIgFAAg");
	this.shape_34.setTransform(131.8,147.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.2)").s().p("AIJAbIAAgGIAAgvIAFAAIAAAvIAAAGIgFAAgAoNAbIAAgGIAAgvIAFAAIAAAvIAAAGIgFAAg");
	this.shape_35.setTransform(131.8,148.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.498)").s().p("AIIAbIAAgGIAAgvQAJASgDAdIgBAGIgFAAgAoOAbIAAgGIAAgvIAFAAIAAAvIAAAGIgFAAg");
	this.shape_36.setTransform(131.874,142.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.188)").s().p("AgCASIAAgGIAAgdQAIAIgEAVIAAAGIgEAAg");
	this.shape_37.setTransform(202.274,144.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.608)").s().p("ACiAFIlOAAIAAgFQCoAACmgDQAMgBgBAJIgLAAg");
	this.shape_38.setTransform(239.4288,137.3488);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.996)").s().p("ABVV6IlOAAIgFgBQgygRgTgwIgBgGIABgpQAGgOAEgQIAAgGQAVgdAmgMIAFAAIFOAAICqAAQBFAVgFBhIAAAGQgSAtgpAUIgFABIiqAAgATWCgIlPAAQgegCgPgUQgOgTgKgYIAAgGIAAgwIAZgsIAEgFQAPgQAZgFIFPAAIALAAQAfAFAOAXIAGAIQAVAggDA4QgTAsgoAUIgFABIgQAAgAuRCgIlPAAIgFgBQgvgRgRgvIAAgGIAAgwQALgaAQgTQARgUAegFIFPAAIAFAAQAoAIAQAfQAJAQACAWQACAXAAAYQgLAUgNATQgOATgZAHIgQAAgAAKtiIgZAAIgFgBQgzgQgNg3IAAg1IAAlNIAAgGIAAgLQARgqApgRIAFgBIAqAAIAFAAQAtASANAwIABAFIAAFNIAAA7QgHAWgJAUIgEABQgQAYghAFIgGAAg");
	this.shape_39.setTransform(131.8245,140.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.224)").s().p("AO8AMIAAgdQAKAMgHAWIgDABIAAgGgAu/ASQgCgSAAgRIAFAAIAAAdIAAAGg");
	this.shape_40.setTransform(131.807,49.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.992)").s().p("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");
	this.shape_41.setTransform(131.8,172.2129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,263.7,304.1), null);


(lib.r4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(22,1,1).p("AgptEIAAQ9ATGAAQAAIAlqFqQlqFpn/AAQoAAAlqlpQlplqAAoAQAAn/FplqQFqlqIAAAQH/AAFqFqQFqFqAAH/gA0wO4QlZmnAApRQAAnJDNlkQA9hqBPhhAUxw4QFZGnAAJRQAAHJjNFkQg9BqhPBh");
	this.shape.setTransform(167.425,123.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(18.5,1,1).p("ABdAAQAAAmgbAbQgTAUgZAFQgKADgMAAQglAAgcgcQgbgbAAgmQAAgmAbgbQAcgbAlAAQAMAAAKACQAZAGATATQAbAbAAAmg");
	this.shape_1.setTransform(166.65,192.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,153,0.976)").s().p("AgVBaQAYgFATgTQAbgbAAgnQAAglgbgcQgTgTgYgGQAYAGATATQAbAcAAAlQAAAngbAbQgTATgYAFQgZgFgTgTQgbgbAAgnQAAglAbgcQATgTAZgGQALgCAKAAQAnAAAbAbQAbAcAAAlQAAAngbAbQgbAbgnAAQgKAAgLgDg");
	this.shape_2.setTransform(171,192.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DC0219").ss(18.5,1,1).p("ABdAAQAAAmgbAbQgTAUgZAFQgKADgMAAQglAAgcgcQgbgbAAgmQAAgmAbgbQAcgbAlAAQAMAAAKACQAZAGATATQAbAbAAAmg");
	this.shape_3.setTransform(166.65,192.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DC0219").ss(22,1,1).p("AgptEIAAQ9ATGAAQAAIAlqFqQlqFpn/AAQoAAAlqlpQlplqAAoAQAAn/FplqQFqlqIAAAQH/AAFqFqQFqFqAAH/gA0wO4QlZmnAApRQAAnJDNlkQA9hqBPhhAUxw4QFZGnAAJRQAAHJjNFkQg9BqhPBh");
	this.shape_4.setTransform(167.425,123.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVBaQAYgFATgTQAbgbAAgnQAAglgbgcQgTgTgYgGQAYAGATATQAbAcAAAlQAAAngbAbQgTATgYAFQgZgFgTgTQgbgbAAgnQAAglAbgcQATgTAZgGQALgCAKAAQAnAAAbAbQAbAcAAAlQAAAngbAbQgbAbgnAAQgKAAgLgDg");
	this.shape_5.setTransform(171,192.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,356.9,269.1);


(lib.R3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(9,1,1).p("ACTAAQAAA4gsAoQgqAog9AAQg8AAgsgoQgqgoAAg4QAAg4AqgoQAsgoA8AAQA9AAAqAoQAsAoAAA4g");
	this.shape.setTransform(122.5,98.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(15,1,1).p("AiLkmIEXAAAiLkmIAADIIENAAAiLmKIAABkAh3B4ID5AAAiLheIAAHp");
	this.shape_1.setTransform(137,39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,2,2,3,true).p("AAAD9IAAiQAAAh/IAAh9");
	this.shape_2.setTransform(233,123.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,153,0.976)").s().p("AuyFuQgfgRgoghQgugogXgTQgpghglgRIAAiGQAzANAuAfQAZAQApAiQAtAmAUAOQBTA5BDgRQAWgGAZgQQANgIAfgYQBkhMBPgkQAbgMAZgIIAAgIQAUgCASgBQA2gMAzAFIAjAGIAAAeQAVALAVANQAZAQAoAiQAuAmATAOQBTA6BCgSQAWgFAZgRQAOgIAegXQBkhNBPgkQBogvBcAKQARABARAEIAAAEQBJAJBDArQAZAQAoAiQAtAmAUAOQBTA6BDgSQAWgFAZgRQAOgIAdgXQBBgxA3ggIAACQIgXAPQgPAKgiAbQgeAYgSAMQg5AkhDACQhDADg7ggQgfgQgpgiQgtgogXgSQhCg2g2gKIAAABIgMgDIgQAAQgVAAgfAKIAAgMQgVACgWAHQgXAGgrARQgqASgWAKQgjAQgZASQgPAKgiAbQgdAYgTAMQg5AkhDACQhCADg7ggQgfgQgpgiQgtgogXgSQhCg2g2gKIgZAHQgXAGgrARIhAAbQgjARgaARQgOAKghAbQgfAZgSAMQg5AkhDACIgMAAQg8AAg2gdgAkmhNIgKAAQgZgCgZgFQgsgIgugSQhPgfhkhDQgfgUgNgHQgZgOgWgFQhDgPhTAyQgUAMgtAhQgpAdgZAOQhPAthaABIAAhvIADAAQBAACBTg7QAXgQAugiQAogdAfgPQA7gbBDACQBDACA5AfQASAKAfAWQAhAXAOAJQAaAPAjAOIBAAYIAxAQIARAEQARAFAQACIAKABIAZACQAbAAAcgHIAAB1IgjAEIgeACIgPgBgAF1hsQgSAAgUgCIAAh1QAeAIAXABQAWAAAZgGQATgGAVgKQAPgGAPgKIAegTQAXgQAtgjQApgdAfgOQA7gcBDADQBDACA5AfQATAKAdAVQAiAYAOAIQAbAQAiAOIBAAXIATAHIAAB9QgegIgegMQhPgfhkhCQgegUgOgIQgZgOgWgFQhDgPhTAyQgTAMguAhQgpAegYAOQgZAOgZAJQgPAGgPAEQgUAGgUADQgaAEgaAAIgKgBgAgOiiQgegeAAgsQAAgrAegfQAfgfArAAQArAAAfAfQAfAfAAArQAAAsgfAeQgfAfgrAAQgrAAgfgfg");
	this.shape_3.setTransform(116.5,122.1526);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DB061C").ss(9,1,1).p("ACTAAQAAA4gsAoQgqAog9AAQg8AAgsgoQgqgoAAg4QAAg4AqgoQAsgoA8AAQA9AAAqAoQAsAoAAA4g");
	this.shape_4.setTransform(122.5,98.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DB061C").ss(15,1,1).p("AiLkmIEXAAAiLkmIAADIIENAAAiLmKIAABkAh3B4ID5AAAiLheIAAHp");
	this.shape_5.setTransform(137,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DB061C").ss(1,2,2,3,true).p("AAAD9IAAiQAAAh/IAAh9");
	this.shape_6.setTransform(233,123.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(220,2,25,0.976)").s().p("AuyFuQgfgRgoghQgugogXgTQgpghglgRIAAiGQAzANAuAfQAZAQApAiQAtAmAUAOQBTA5BDgRQAWgGAZgQQANgIAfgYQBkhMBPgkQAbgMAZgIIAAgIQAUgCASgBQA2gMAzAFIAjAGIAAAeQAVALAVANQAZAQAoAiQAuAmATAOQBTA6BCgSQAWgFAZgRQAOgIAegXQBkhNBPgkQBogvBcAKQARABARAEIAAAEQBJAJBDArQAZAQAoAiQAtAmAUAOQBTA6BDgSQAWgFAZgRQAOgIAdgXQBBgxA3ggIAACQIgXAPQgPAKgiAbQgeAYgSAMQg5AkhDACQhDADg7ggQgfgQgpgiQgtgogXgSQhCg2g2gKIAAABIgMgDIgQAAQgVAAgfAKIAAgMQgVACgWAHQgXAGgrARQgqASgWAKQgjAQgZASQgPAKgiAbQgdAYgTAMQg5AkhDACQhCADg7ggQgfgQgpgiQgtgogXgSQhCg2g2gKIgZAHQgXAGgrARIhAAbQgjARgaARQgOAKghAbQgfAZgSAMQg5AkhDACIgMAAQg8AAg2gdgAkmhNIgKAAQgZgCgZgFQgsgIgugSQhPgfhkhDQgfgUgNgHQgZgOgWgFQhDgPhTAyQgUAMgtAhQgpAdgZAOQhPAthaABIAAhvIADAAQBAACBTg7QAXgQAugiQAogdAfgPQA7gbBDACQBDACA5AfQASAKAfAWQAhAXAOAJQAaAPAjAOIBAAYIAxAQIARAEQARAFAQACIAKABIAZACQAbAAAcgHIAAB1IgjAEIgeACIgPgBgAF1hsQgSAAgUgCIAAh1QAeAIAXABQAWAAAZgGQATgGAVgKQAPgGAPgKIAegTQAXgQAtgjQApgdAfgOQA7gcBDADQBDACA5AfQATAKAdAVQAiAYAOAIQAbAQAiAOIBAAXIATAHIAAB9QgegIgegMQhPgfhkhCQgegUgOgIQgZgOgWgFQhDgPhTAyQgTAMguAhQgpAegYAOQgZAOgZAJQgPAGgPAEQgUAGgUADQgaAEgaAAIgKgBgAgOiiQgegeAAgsQAAgrAegfQAfgfArAAQArAAAfAfQAfAfAAArQAAAsgfAeQgfAfgrAAQgrAAgfgfg");
	this.shape_7.setTransform(116.5,122.1526);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.5,234,169.2);


(lib.R2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(28,1,1).p("Agtg7IBbB3");
	this.shape.setTransform(253.475,55.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.976)").s().p("AteMqIgSgTQgOgPgBgkQAAiqADiqQABgigJgPQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAIgJgGQgMgJgQgGIgogTQgsgTgmgVQg5ggg5geQhtg5hvg2IgJgFQgZgSgPgiIAAgHIAAgvIAAgGIAAgOQARggAMgqIAYhNIAyiXIAbhSQANgqAmgDIAhAAIAFAAQBwA2BwA7QBsA5BwA3QA5AbA2AfIAJAFQAvAbA1ANQASAGAUAAIBjAAQACgEAAgDQADhBAAhBQAAhHADhIQABgigJgOIgGAAIjWAAIgFAAQgpgLgOgyIAAgHIAAgpIAAgHIAAgGQARggAbgPIAFgBIEuAAIEtAAIAGAAQAjAMAMArIABAGIAAAiIAAAHIgBAHQgPA3gxAGIgFAAIjQAAIgGAAQAACkADCkIADAAID8AAIAFAAQBAA5A3BJIBIBeQAdgEAVgMQAdgPAagMIA8gdQB1g6B1g5QBxg3B1g3QBwg0BygzQAKgFAGgKQBFgKAXA7QABAFAAAHIAAApIAAAHIAAALIhdh4IBdB4QgCAQgHAJIiRCzIgpA0QhRBphUBkIgpAxQhUBlhQBnIgpA2QhRBohVBhIgFAIQgQAigiAHIj3AAIksAAIkuAAIktAAIgFAAQgLAAgGgGgAr2HvQAABIADBHQAAAEADADIEtAAIEuAAIEsAAQA3AAA3gDQACAAADgEQBVhiBRhoIApg1QBRhoBThlQBBhPA/hSQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAVgagfAOIAAAHQgiAMgfAPQhVArhVAnIhvAzQhuA0hsA3IgGADQgnAFgggJQgQgYgSgWQhLhehMhcIhSAAIkuAAIktAAIgGAAIAAHCgAy3kFQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgfBnglBdQgDAhATABQAPAAAJAKQADADAFADQBtA5BvA4IBuA2QAJgOgBgiQgDhOAAhNQgCgYAIgKQAPgSgUgHIgSgHQgjgQgfgRQg4gfg6gcIgdgPQgfgPgbgTQgMgIgIAAQgFAAgDADgARPIfQg7g6AAhTQAAhTA1iDQA1iEBQgoQBQgoBDCrQBDCsAABTQAABTg6A6Qg7A7hTAAQhTAAg6g7gAFjjHQgDgNAAgOIAGAAIAAAXIAAAEIgDAAgARxjKgAAcp4QgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIAAgEQAfgKgVASIgEABIgBgDgAGRsUIAAgbQAKAJgHAWIgDABIAAgFg");
	this.shape_1.setTransform(144.4375,81.5875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DC071E").ss(28,1,1).p("Agtg7IBbB3");
	this.shape_2.setTransform(253.475,55.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(220,2,25,0.976)").s().p("AteMqIgSgTQgOgPgBgkQAAiqADiqQABgigJgPQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAIgJgGQgMgJgQgGIgogTQgsgTgmgVQg5ggg5geQhtg5hvg2IgJgFQgZgSgPgiIAAgHIAAgvIAAgGIAAgOQARggAMgqIAYhNIAyiXIAbhSQANgqAmgDIAhAAIAFAAQBwA2BwA7QBsA5BwA3QA5AbA2AfIAJAFQAvAbA1ANQASAGAUAAIBjAAQACgEAAgDQADhBAAhBQAAhHADhIQABgigJgOIgGAAIjWAAIgFAAQgpgLgOgyIAAgHIAAgpIAAgHIAAgGQARggAbgPIAFgBIEuAAIEtAAIAGAAQAjAMAMArIABAGIAAAiIAAAHIgBAHQgPA3gxAGIgFAAIjQAAIgGAAQAACkADCkIADAAID8AAIAFAAQBAA5A3BJIBIBeQAdgEAVgMQAdgPAagMIA8gdQB1g6B1g5QBxg3B1g3QBwg0BygzQAKgFAGgKQBFgKAXA7QABAFAAAHIAAApIAAAHIAAALIhdh4IBdB4QgCAQgHAJIiRCzIgpA0QhRBphUBkIgpAxQhUBlhQBnIgpA2QhRBohVBhIgFAIQgQAigiAHIj3AAIksAAIkuAAIktAAIgFAAQgLAAgGgGgAr2HvQAABIADBHQAAAEADADIEtAAIEuAAIEsAAQA3AAA3gDQACAAADgEQBVhiBRhoIApg1QBRhoBThlQBBhPA/hSQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAVgagfAOIAAAHQgiAMgfAPQhVArhVAnIhvAzQhuA0hsA3IgGADQgnAFgggJQgQgYgSgWQhLhehMhcIhSAAIkuAAIktAAIgGAAIAAHCgAy3kFQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQgfBnglBdQgDAhATABQAPAAAJAKQADADAFADQBtA5BvA4IBuA2QAJgOgBgiQgDhOAAhNQgCgYAIgKQAPgSgUgHIgSgHQgjgQgfgRQg4gfg6gcIgdgPQgfgPgbgTQgMgIgIAAQgFAAgDADgARPIfQg7g6AAhTQAAhTA1iDQA1iEBQgoQBQgoBDCrQBDCsAABTQAABTg6A6Qg7A7hTAAQhTAAg6g7gAFjjHQgDgNAAgOIAGAAIAAAXIAAAEIgDAAgARxjKgAAcp4QgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIAAgEQAfgKgVASIgEABIgBgDgAGRsUIAAgbQAKAJgHAWIgDABIAAgFg");
	this.shape_3.setTransform(144.4375,81.5875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288.9,163.2);


(lib.R1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(15,1,1).p("AjboJIAACEIAAEIIAAKHAi7CeIGHAAAjbmFIG3AAAjbh9IGnAA");
	this.shape.setTransform(175.725,105.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(22,1,1).p("ATGAAQAAIAlqFqQlqFpn/AAQoAAAlqlpQlplqAAoAQAAn/FplqQFqlqIAAAQH/AAFqFqQFqFqAAH/gA0wO4QlZmnAApRQAAnJDNlkQA9hqBPhhAUxw4QFZGnAAJRQAAHJjNFkQg9BqhPBh");
	this.shape_1.setTransform(167.425,123.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(9,1,1).p("ADnAAQAABLhFA0QhCA1hgAAQhfAAhEg1QhDg0AAhLQAAhKBDg1QBEg0BfAAQBgAABCA0QBFA1AABKg");
	this.shape_2.setTransform(152.975,183.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,153,0.976)").s().p("AijB/QhDg0AAhLQAAhKBDg1QBEg0BfAAQBgAABCA0QBFA1AABKQAABLhFA0QhCA1hgAAQhfAAhEg1g");
	this.shape_3.setTransform(152.975,183.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(15,1,1).p("AjboJIAACEIAAEIIAAKHAi7CeIGHAAAjbmFIG3AAAjbh9IGnAA");
	this.shape_4.setTransform(175.725,105.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(22,1,1).p("ATGAAQAAIAlqFqQlqFpn/AAQoAAAlqlpQlplqAAoAQAAn/FplqQFqlqIAAAQH/AAFqFqQFqFqAAH/gA0wO4QlZmnAApRQAAnJDNlkQA9hqBPhhAUxw4QFZGnAAJRQAAHJjNFkQg9BqhPBh");
	this.shape_5.setTransform(167.425,123.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(9,1,1).p("ADnAAQAABLhFA0QhCA1hgAAQhfAAhEg1QhDg0AAhLQAAhKBDg1QBEg0BfAAQBgAABCA0QBFA1AABKg");
	this.shape_6.setTransform(152.975,183.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(220,2,25,0.976)").s().p("AijB/QhDg0AAhLQAAhKBDg1QBEg0BfAAQBgAABCA0QBFA1AABKQAABLhFA0QhCA1hgAAQhfAAhEg1g");
	this.shape_7.setTransform(152.975,183.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,356.9,269.1);


(lib.G2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(22,1,1).p("AKHMLIDEChInMBQIAAnMgAprMhQgzgogvgwQgtgtgmgvQhEhVguhdQhljLAAj0QAAmkEqkqQEpkpGkAAQGlAAEpEpQEqEqAAGkQAAGkkqEpQgiAjglAfAoXFpICfk3IL3AVIB6D6Al4AyIF9rsIF6MB");
	this.shape.setTransform(101.55,102.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.976)").s().p("AjljlIEHDbIDECgInLBQg");
	this.shape_1.setTransform(162.85,181.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9FBE3D").ss(22,1,1).p("AKHMLIDEChInMBQIAAnMgAprMhQgzgogvgwQgtgtgmgvQhEhVguhdQhljLAAj0QAAmkEqkqQEpkpGkAAQGlAAEpEpQEqEqAAGkQAAGkkqEpQgiAjglAfAoXFpICfk3IL3AVIB6D6Al4AyIF9rsIF6MB");
	this.shape_2.setTransform(101.55,102.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(147,104,51,0.976)").s().p("AjljlIEHDbIDECgInLBQg");
	this.shape_3.setTransform(162.85,181.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,225.1,226.1);


(lib.g1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(9,1,1).p("AQKihQAADKjzCOQjyCPlXAAQi4AAiagpQkAmcDqnbQCjgvDFAAQFXAADyCPQDzCPAADKgAmThVIp2EIAmTk3Ip2EJAlXo1IqyEiAkHFGIsCFEAlXBsIqyEi");
	this.shape.setTransform(103.375,64.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9FBE3D").ss(9,1,1).p("AQKihQAADKjzCOQjyCPlXAAQi4AAiagpQkAmcDqnbQCjgvDFAAQFXAADyCPQDzCPAADKgAlXo1IqyEiAmTk3Ip2EJAmThVIp2EIAlXBsIqyEiAkHFGIsCFE");
	this.shape_1.setTransform(103.375,64.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,215.8,139);


(lib.yeloow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDC62E").s().p("AFaDcQiTg9jJAGQkkAHivBkQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQhli2hajBQDziOFegfIAHgBIB8AAIAHAAIAHABQFlAbDsCaQgBADgBADQheC7hkC2g");
	this.shape.setTransform(66.55,27.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yeloow, new cjs.Rectangle(0,0,133.1,55.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.992)").s().p("AjJMXQgogDghgSQhdg1AEiXQCLkmCTkfQCSkeCMkmQAxhoBDhYQADgEAHAAQAbACADAbQhPFhhTFaQhUFfhPFeQgjCaixAAIgdgBgAj9JqIACAAIABAFQAHAhAWAUIAEABQA/AlBBgmIABgEQAzgyghhLIgDgBQgWgbghgPIgFAAQhdgDgZBBIAAAJIAAAFIgFAAQAAATADATg");
	this.shape.setTransform(36.4418,79.2256);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,72.9,158.5), null);


(lib.red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC0219").s().p("AAMHeQgNiqh0i8QiYj3iuhmQgCgDABgCQBmirB1imIALgQQA6AhA3ApQCyCFCaDbIAEAGIA/BtIADAGIADAGQBtDgAZDNIAFA0QAEA+gDA8QgDACgDAAQjSAMjQAFQgDg3gFg3g");
	this.shape.setTransform(44.5316,58.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(0,0,89.1,117.6), null);


(lib.green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FBE3D").s().p("AnBIzQgCkZCUk9IADgGIA/htIAEgGIAEgHQDJknD6h/IAFAFQB0CvBrCxIhwBPQh/BghgCxQiKEBgCDKQAAABgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQjRgDjUgUg");
	this.shape.setTransform(44.9987,58.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(0,0,90,117.2), null);


(lib.coin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(28.95,28.95,0.5815,0.4627);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AcBAAQAAGwoNEyQoNExrnAAQrmAAoNkxQoNkyAAmwQAAmvINkyQINkxLmAAQLnAAINExQINEyAAGvg");
	this.shape.setTransform(179.3,104.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("AzzLhQoNkxAAmwQAAmvINkyQINkxLmAAQLnAAINExQINEyAAGvQAAGwoNExQoNEyrnAAQrmAAoNkyg");
	this.shape_1.setTransform(179.3,104.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coin, new cjs.Rectangle(-1,-1,360.6,210.6), null);


(lib.cc4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#515151").ss(9,1,1).p("AJ7AAQAAEHi6C6Qi6C6kHAAQkGAAi6i6Qi6i6AAkHQAAkGC6i6QC6i6EGAAQEHAAC6C6QC6C6AAEGg");
	this.shape.setTransform(63.5,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6A6A6").s().p("ABpAKQgCgGgBAAQhpgMhrgHQB3gFBiAXQAEABAAANQgEgDgCgEg");
	this.shape_1.setTransform(56.075,82.5319);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CECECE").s().p("AAAArQgDgrAAgrIAHAAIAABQIAAAGIgEAAg");
	this.shape_2.setTransform(78.975,81.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#949494").s().p("AhugCIDVAAIAIAAIAAACQhvADhuAAIAAgFg");
	this.shape_3.setTransform(56.075,76.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#939393").s().p("AgDBaIAAgGIAAitQAMBSgJBhg");
	this.shape_4.setTransform(80.5256,57.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8F8F8F").s().p("AjdgDIGzAAIAIAAIAAAFIgIAAIiIACQiZAAiSgHg");
	this.shape_5.setTransform(52.625,58.5508);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9F9F9F").s().p("AgDAiIAAhDIAAgGQAMAfgJAvIgDABIAAgGg");
	this.shape_6.setTransform(75.1756,62.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BDBDBD").s().p("AingCIFHAAIAIAAIAAACQioADinAAIAAgFg");
	this.shape_7.setTransform(50.325,85.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C2C2C2").s().p("AAAB5QgDh5AAh3IAHAAIAADpIAAAHg");
	this.shape_8.setTransform(19.375,78.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgxgCIBbAAIAIAAIgBACQgZADgVAAQgcAAgYgFg");
	this.shape_9.setTransform(33.125,71.8806);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#878787").s().p("AAiADIhLAAIAAgFQApAAAqACIAAADIgIAAg");
	this.shape_10.setTransform(30.1,65.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AA4AbIhbAAIgHgBQgfgJAIgrIAIAAIBLAAIAIAAQAtAHgDAtIgEABIgIAAg");
	this.shape_11.setTransform(31.7394,68.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A8A8A8").s().p("ACRADIkpAAIAAgFQCYAACZACIAAADIgIAAg");
	this.shape_12.setTransform(51.85,37.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BEBEBE").s().p("AicgCIExAAIAIAAIAAACQidADicAAIAAgFg");
	this.shape_13.setTransform(53,41.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#505050").s().p("AkSD4IAAgHIAAjqIAAgHIAAgGQAzh6A3h3IABgHQAZgRAdgPQADgBAEAAIEpAAIAIAAQACAVALAOQACACAAADIgIAAIkwAAIAAAHQgEAAgBABQgtA3gbBHQAAARAEAQQAAAAAAAAQABAAAAAAQABAAAAAAQABABABAAQDPALDjgFIAIAAIAABDIAAAGQAAADgCACQgzAkgXA7IgIAAIjVAAIAAAHIgIAAQAAAUAEAUIAEAAQBqAHBqANQABAAACAHQACAEAEADIAAAHIAAAGIgIAAIlIAAIAAAHQAGAngTARQghAfgeAAQghAAgcgogAjFA1IAHABQAoALA7gIIAAgDIAEgBQAEgugugHIAAgCQgqgEgqAAIAAAGIgIAAQgHAsAfAJg");
	this.shape_14.setTransform(47.275,66.1945);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B8B8").s().p("AAAAyQgEgyAAgxQAMAmgFA3IAAAGg");
	this.shape_15.setTransform(80.6194,27.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F8F8").s().p("AhSAwQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAgBIAAgGIAAhQQAigbA5gFIAIgBQBMANgHBXIgBAGQgbAigxAMIgHABQgtgKglgTg");
	this.shape_16.setTransform(87.8045,81.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#969696").s().p("AAABeQgDheAAhdIAHAAIAAC0IAAAHg");
	this.shape_17.setTransform(94.275,57.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBFAF5").s().p("AnAHBQi6i6AAkHQAAkGC6i6QC6i6EGAAQEHAAC6C6QC6C6AAEGQAAEHi6C6Qi6C6kHAAQkGAAi6i6gAm4ETIADAAQA1BMBIhDQATgSgGgnQCpAACmgDIAAgDIAAgGIAAgIQAAgNgDgBQhhgYh4AFIgEgBQgEgTAAgUIAIAAQBuAABugDIAAgEQAYg8AzgjQACgCAAgDIAEgBQAJgvgNggIgIAAImzAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgEgPAAgRQAbhHAsg3QACgBADgBQCdABCcgEIAAgDQAAgDgCgCQgMgOgCgWIAAgCQiYgEiZAAIAAAGQgDABgDABQgdAPgaARIgBAGQg2B4g0B5IAAAHIAAAHIgHAAQAAB4AEB5gABSlOQgBA3AQAnIABAGQAvAaAUAwQACADAAAEIAACtIAAAHQgBADgCADQguA4gkBBIAAAvIAAAGQAaBCBAAfQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQArAFAxACIAHAAQCig2hLicQgNgbgWgWQgKgJgDgNIAAgHIAAi0QAAgEABgCQAng4Arg0IABgHQAKh1hegXIAAAGIgIAAIAABeIAAAHQAAADgCABQhGAvg6gzIAAgHQAGg4gNgmIAAgDQhGANgPBAg");
	this.shape_18.setTransform(63.5,63.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#515151").s().p("AAaFtQgvgBgrgGQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQhAgfgahBIAAgHIAAgvQAkhBAug4QACgDAAgDIAEAAQAJhigNhSQAAgDgBgDQgUgxgwgZIgBgHQgQgnACg3QAPhABFgNIAAADQAAAzAEAyIAEAAQA6AzBFguQACgCAAgDQANgngFg3IgBgHIAAgGQBfAYgKB0IgBAHQgsA0gmA4QgCADAAADIgHAAQAABeADBdIAEAAQAEANAKAJQAWAXANAaQBLCciiA2IgIAAgAhTEPIADAAQAAABAAABQAAAAAAABQABABAAAAQAAAAABAAQAlATAsALIAIgBQAxgNAbghIABgHQAHhXhMgNIgIAAQg5AGgiAbIgHAAQAAAsAEArg");
	this.shape_19.setTransform(87.4414,58.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ADADAD").s().p("AgEAsIAAhdIAHAAIAAAHQAFA2gMAmIAAgGg");
	this.shape_20.setTransform(94.3694,27.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D25344").ss(9,1,1).p("AJ7AAQAAEHi6C6Qi6C6kHAAQkGAAi6i6Qi6i6AAkHQAAkGC6i6QC6i6EGAAQEHAAC6C6QC6C6AAEGg");
	this.shape_21.setTransform(63.5,63.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D25344").s().p("AmgFFIAAgHIAAjqIAAgHIAAgHQAzh5A3h3IABgHQAZgRAdgPQADgBAEAAIEpAAIAIAAQACAVALAOQACACAAADIgIAAIkwAAIAAAHQgEAAgBABQgtA3gbBHQAAARAEAQQAAAAAAAAQABAAAAAAQABAAAAAAQABABABAAQDQAKDigFIAIAAIAABDIAAAHQAAADgCACQgzAkgXA7IgIAAIjVAAIAAAHIgIAAQAAAUAEAUIAEAAQBrAHBpANQABAAACAHQACAEAEADIAAAHIAAAGIgIAAIlIAAIAAAHQAGAngTARQghAfgeAAQghAAgcgogAlTCCIAHABQAoALA7gIIAAgDIAEgBQAEgugugHIAAgDQgqgEgqAAIAAAHIgIAAQgHAsAfAJgAEeFtQgwgBgsgGQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQhBgfgahBIAAgHIAAgvQAlhBAug4QACgDAAgDIADAAQAKhigNhSQAAgDgCgDQgUgxgvgZIgBgHQgQgnABg3QAPhABGgNIAAADQAAAzADAyIAEAAQA6AzBGguQACgCAAgDQANgngFg3IAAgHIAAgGQBeAYgKB0IAAAHQgsA0gnA4QgBADAAADIgIAAQAABeAEBdIAEAAQADANAKAJQAXAXANAaQBKCciiA2IgHAAgACvEPIAEAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQAmATAtALIAHgBQAygNAbghIAAgHQAHhXhMgNIgHAAQg6AGgiAbIgIAAQAAAsAEArg");
	this.shape_22.setTransform(61.4728,58.4945);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,136,136);


(lib.cc3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#515151").ss(9,1,1).p("AJCAAQAADviqCpQipCqjvAAQjuAAiqiqQipipAAjvQAAjuCpiqQCqipDuAAQDvAACpCpQCqCqAADug");
	this.shape.setTransform(57.75,57.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AguF7QhigKhFgnQhcgzg4hXQgpg+gLhbQgDggAAgiQARh9BBhNQBAhOBkgsQBKggBsACQBpACBIAjQBhAvA+BRQA2BHAMBtQAJBGgQA4QggBuhKBFQhKBFhwAeQgzAOg6AAQgZAAgbgDgAiUkNQgwAYgmAhQhLBEgRB9IAAAPQAEBlAsA/QA7BTBqAnQA1ATBIgDQBmgEBBgoQBag3AohkQALgaADgeQAOhogphIQgzhbhiguQgxgXhCgEIglgCQhUAAg7AegAgfEGQhBgFgvgZQhegyglhnQgQgtACg9QAWh3BSg9QA8guBggLQAigEAkAGQB6AUBDBMQAyA4AHBhQAEA0gOAnQgmBnhdAzQg5AghVAAIgkgCgAAlBcIAAACIgFBNIAAAVIAAACIABAOIABAAQBjgQAyg/Qg4gdg6gZQgOALgSAGgAhGBLIhwAyIAAACQA2BDBmAOIgBgGQgEg2gCg4IgBAAQgUgHgPgLIgBABgADUhRIhpA/IAAACQACASgBAQIABABQA1AhAzAcQAJgSAEgWQAMhGgZg0IgBABgAjUhPQgLAcgFAhIAAADQgCA5AUAmQA0ggA2geIAAgCQgDgSABgQQg0ggg2geIAAABgAgpgbIAAABIgJARIAAACQAAAUAJAOQAHAGAJAEQAgASAcgVQAUgPgHgdQgEgWgVgIQgOgEgMAAQgXAAgPARgAgcjRQhlARg1BAIBxA2QAPgMAVgHIAAgEIAHhxIgCABgAAgjEIAAACIAAAQIAAACQADADgBAIIAAABIACAuIAAABQADADgCAIIAAABQAAAFADACQAMANATAJIABAAQA4gaA3gbIgBAAQgxhAhjgPIgCAAIAAAMg");
	this.shape_1.setTransform(57.8943,59.6589);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBFAF5").s().p("AmXGYQiqipAAjvQAAjuCqipQCpiqDuAAQDvAACpCqQCqCpgBDuQABDviqCpQipCqjvgBQjuABipiqgAiplMQhkAshABOQhBBNgRB9QAAAiADAgQALBbApA/QA5BWBcAzQBEAnBiAKQBYAKBJgVQBwgeBLhFQBKhFAfhuQAQg4gJhGQgMhtg2hHQg+hQhhgwQhIgihogDIgNAAQhkAAhGAegAhvEuQhrgng7hUQgsg+gEhnIAAgOQARh9BLhDQAmgiAwgYQBJgkBsAIQBCAFAxAWQBhAvAzBaQApBIgOBoQgDAegKAaQgpBlhaA2QhBAohlAEIgTABQg9AAgtgQgAgbj0QhfAKg9AuQhSA9gWB3QgCA9ARAtQAlBnBdAyQAvAZBBAFQBsAJBHgnQBcgzAmhnQAOgmgEg2QgHhggyg4QhDhMh6gUQgVgDgVAAQgNAAgPACgAAjDjIgBgOIAAgBIAAgWIAEhNIAAgCQATgGANgKQA7AZA4AcQgzA/hjAQgAi1CSIAAgCIBwgyIABgBQAPALAUAHIACAAQACA4ADA2IABAGQhmgNg2hEgABuAmIgBgBQABgQgCgTIAAgCIBpg+IABgBQAZA0gMBGQgEAWgJASQgzgcg1ghgAjjAEIAAgEQAFggALgcIABgBQA1AfA0AeQgBAQADATIAAACQg2Aeg0AgQgUglACg6gAgYA4QgIgEgIgGQgJgOABgVIAAgCIAIgQIAAgBQAYgaApAOQAUAHAFAVQAGAegUAPQgPALgRAAQgNAAgPgIgAi1htQA1hABlgRIACAAIgGBwIAAAFQgWAGgPAMIhxg2gAAphPQgDgCAAgEIAAgCQACgIgDgDIAAgBIgCgtIAAgCQABgIgCgDIAAgCIAAgQIAAgCIAAgMIABAAQBjAQAxA/IACABQg3Aag5AaIgBABQgTgKgMgNg");
	this.shape_2.setTransform(57.75,57.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D25344").ss(9,1,1).p("AJCAAQAADviqCpQipCqjvAAQjuAAiqiqQipipAAjvQAAjuCpiqQCqipDuAAQDvAACpCpQCqCqAADug");
	this.shape_3.setTransform(57.75,57.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D25344").s().p("AguF7QhigKhFgnQhcgzg4hXQgpg+gLhbQgDggAAgiQARh9BBhNQBAhOBkgsQBKggBsACQBpACBIAjQBhAvA+BRQA2BHAMBtQAJBGgQA4QggBuhKBFQhKBFhwAeQgzAOg6AAQgZAAgbgDgAiUkNQgwAYgmAhQhLBEgRB9IAAAPQAEBlAsA/QA7BTBqAnQA1ATBIgDQBmgEBBgoQBag3AohkQALgaADgeQAOhogphIQgzhbhiguQgxgXhCgEIglgCQhUAAg7AegAgfEGQhBgFgvgZQhegyglhnQgQgtACg9QAWh3BSg9QA8guBggLQAigEAkAGQB6AUBDBMQAyA4AHBhQAEA0gOAnQgmBnhdAzQg5AghVAAIgkgCgAAlBcIAAACIgFBNIAAAVIAAACIABAOIABAAQBjgQAyg/Qg4gdg6gZQgOALgSAGgAhGBLIhwAyIAAACQA2BDBmAOIgBgGQgEg2gCg4IgBAAQgUgHgPgLIgBABgADUhRIhpA/IAAACQACASgBAQIABABQA1AhAzAcQAJgSAEgWQAMhGgZg0IgBABgAjUhPQgLAcgFAhIAAADQgCA5AUAmQA0ggA2geIAAgCQgDgSABgQQg0ggg2geIAAABgAgpgbIAAABIgJARIAAACQAAAUAJAOQAHAGAJAEQAgASAcgVQAUgPgHgdQgEgWgVgIQgOgEgMAAQgXAAgPARgAgcjRQhlARg1BAIBxA2QAPgMAVgHIAAgEIAHhxIgCABgAAgjEIAAACIAAAQIAAACQADADgBAIIAAABIACAuIAAABQADADgCAIIAAABQAAAFADACQAMANATAJIABAAQA4gaA3gbIgBAAQgxhAhjgPIgCAAIAAAMg");
	this.shape_4.setTransform(57.8943,59.6589);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,124.5,124.5);


(lib.cc2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AgIhBIA8AvAgzBCIBWAA");
	this.shape.setTransform(20.175,47.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7F7F7F").ss(0.1,1,1).p("ABujxIg+AKQgRACgQAEABkgmQAGAAAFABIB3AHAjlCBQAAAJACAJIAJBf");
	this.shape_1.setTransform(53.95,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#515151").ss(9,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape_2.setTransform(55.25,55.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#515151").s().p("AjIEnQgFAAgDgDQgCgCAAgFIgFgBQgDg1gBg1IgJhfQgCgJAAgJIgFgBQgFgnAAgnIAKAAIAAgKQAZgoAtgSQAFgCAFAAIAAgFQg1AHgHggQgFAAgBgCQgEgNAAgPQBDgfA2AIQASACALgZQAYg3AugnIAOgFQAQgEARgBIA+gKIAVAAQA2ABA2AEIABAFIAAAUIAAAKIgBAFQg2AEg2ABIgLAAIgKAAQiGAKgZB4QADAfAvgKIAJgBQAtAAAtADIALAAIB3AHQARChgHC8IAAAKIgBAFQg4AFg0AAQhLAAhBgKQgFAAgFgCQgzgSgTAyQAAAFgBAAQgcAFgXAAQghAAgZgKgAifAFQAXCXCvgzQAAgFgCgEQgzhhiSgDIABAJg");
	this.shape_3.setTransform(54.0625,50.4604);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBFAF5").s().p("AmGGHQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkQAADliiCiQiiCijlAAQjkAAiiiigAj3AQIAFABQAAAJACAJIAJBfQABA1ADA2IAFAAQAAAFADADQACACAFAAQAqASBDgNQABAAAAgFQAUgyAzASQAEACAFAAQBBALBLAAQA0gBA5gFIAAgFIAAgKQAIi8gSihIh3gGIgLgBQgsgDgtAAIgKABQgvALgDggQAah3CFgKIAKgBIALAAQA3gBA2gEIAAgFIAAgKIAAgUIAAgFQg2gEg3gBIgVAAIg+AKQgRACgPAEIgPAEQguAogYA3QgLAYgSgCQg2gIhDAfQAAAPAEANQABACAFAAQAIAgA0gHIAAAFQgFAAgFACQgsATgaAnIAAAKIgKAAQAAAoAFAmgAk7gJIhWAAgAkqheIg9gvgAirgqIgBgKQCTADAyBhQACAEAAAFQgrANgjAAQhmAAgShwg");
	this.shape_4.setTransform(55.25,55.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D25344").ss(3,1,1).p("AgIhBIA8AvAgzBCIBWAA");
	this.shape_5.setTransform(20.175,47.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D25344").ss(9,1,1).p("AIpAAQAADliiCiQiiCijlAAQjkAAiiiiQiiiiAAjlQAAjkCiiiQCiiiDkAAQDlAACiCiQCiCiAADkg");
	this.shape_6.setTransform(55.25,55.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D25344").s().p("AjIEnQgFAAgDgDQgCgCAAgFIgFgBQgDg1gBg1IgJhfQgCgJAAgJIgFgBQgFgnAAgnIAKAAIAAgKQAZgoAtgSQAFgCAFAAIAAgFQg1AHgHggQgFAAgBgCQgEgNAAgPQBDgfA2AIQASACALgZQAYg3AugnIAOgFQAQgEARgBIA+gKIAVAAQA2ABA2AEIABAFIAAAUIAAAKIgBAFQg2AEg2ABIgLAAIgKAAQiGAKgZB4QADAfAvgKIAJgBQAtAAAtADIALAAIB3AHQARChgHC8IAAAKIgBAFQg4AFg0AAQhLAAhBgKQgFAAgFgCQgzgSgTAyQAAAFgBAAQgcAFgXAAQghAAgZgKgAifAFQAXCXCvgzQAAgFgCgEQgzhhiSgDIABAJg");
	this.shape_7.setTransform(54.0625,50.4604);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_7},{t:this.shape_1},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,119.5,119.5);


(lib.cc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#515151").ss(9,1,1).p("AKFAAQAAELi9C9Qi9C9kLAAQkKAAi9i9Qi9i9AAkLQAAkKC9i9QC9i9EKAAQELAAC9C9QC9C9AAEKg");
	this.shape.setTransform(64.5,64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E9E9E").s().p("AgDAaIAAg6QAMAYgJAoIgDABIAAgHg");
	this.shape_1.setTransform(70.4134,91.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#555555").s().p("AhICIQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgygfgVg8IAAgHIAAhIQATgrAeggQACgCAAgDQBAgnBXAQIAHABQA2AlAZBBIABAHIAAA6IAAAHIgBAHQglBqhqAAQggAAgpgLgAgVhhQgDAAgDACQgsAVgWArIgBAIQgCAqAKAeQAAADACACQAYAeAnAQIAHAAQBtABAGhnIAAgHQgMhYhjAAIgLAAg");
	this.shape_2.setTransform(55.575,91.4392);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ACACAC").s().p("AgyAAQA4AFAmgLIAHgBQAAABAAABQAAAAgBABQAAABAAAAQAAAAgBABQgaAKgZAAQgYAAgYgIg");
	this.shape_3.setTransform(32.375,91.2332);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5C5C5").s().p("AAAA2QgCg2gBg2IAGAAIAABlIAAAIIgDgBg");
	this.shape_4.setTransform(22.6,80.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ABABAB").s().p("AiFgDIEDAAIAIAAIAAADQg7AEg3AAQhPAAhKgHg");
	this.shape_5.setTransform(87.8,91.5341);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#989898").s().p("AhvgKIAHAAQBgAMBxgFIAHAAQgxAMhBACIgNAAQg/AAghgVg");
	this.shape_6.setTransform(85.625,55.0364);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBFAF5").s().p("AnHHIQi9i9AAkLQAAkKC9i9QC9i9EKAAQELAAC9C9QC9C9AAEKQAAELi9C9Qi9C9kLAAQkKAAi9i9gAi2CWQAAAEgCABQgfAggSArIAABJIAAAIQAUA7AyAfQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQCnAtAwiMIABgHIAEAAQAJgqgNgXIgBgHQgZhCg0glIgHgBQgagEgXAAQg6AAgtAbgAmiDXIADAAQAGAnAfAMIAHABQAzASAxgVQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgHIAAgWQAfhkBjgiQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBIBeAAIAIAAQBJAbAlBDQAAAAAAABQABAAAAAAQABAAAAAAQABABABAAQAFApAQAgQABADAAAEQB9ANCPgKIAAgDIAAgIQASkKgSkKIgIABQjMAkh5B8QhiiGiJhhQg6gqg2AZQAAAKAFACQC1BfBvCiIgHABQkNARh7CkIAAAHIAAAIIgHAAQABA2ADA3gAhnFxIgHAAQgngPgYgfQgCgCAAgDQgKgdACgsIABgHQAVgsAsgVQADgBAEgBQBugEALBcIABAIQgGBmhqAAIgDAAgAlrBiQATgxBDACIAAAEQAiBDhgAUIgGAAQgXAAAFgsgABqhpQBZhHBygtIAHgBQANAygGBDIAAAHIgHAAQgiACggAAQhNAAhDgJg");
	this.shape_7.setTransform(64.5,64.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#515151").s().p("AlfE+IgHgBQgfgMgGgmIAAgIIAAhmIAAgHIAAgHQB7ilENgRIAGAAQhuiii2hfQgEgDAAgKQA2gZA6AqQCIBhBiCGQB5h7DNglIAIgBQASEKgSELIAAAHIgIAAIkEAAQAAgEgCgDQgPgfgFgqQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAgBQglhChKgbIgHAAIheAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQhjAjgfBjIAAAWIAAAIIgHABQgZAHgjAAQgQAAgSgBgAlYCWQgFAxAegGQBfgTghhEIAAgEIgEAAQg/AAgUAwgADkgfQBCgDAxgMIAAgIQAGhDgNgyIgHABQhyAthZBHIgHAAQAkAZBJgCg");
	this.shape_8.setTransform(62.525,59.3842);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D25344").ss(9,1,1).p("AKFAAQAAELi9C9Qi9C9kLAAQkKAAi9i9Qi9i9AAkLQAAkKC9i9QC9i9EKAAQELAAC9C9QC9C9AAEKg");
	this.shape_9.setTransform(64.5,64.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D25344").s().p("AiNF/QAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgygfgUg7IAAgIIAAhJQASgrAegfQACgCAAgEQBAgmBYAPIAIABQA0AlAZBCIABAHIAAA6IAAAHIgBAHQglBqhoAAQgiAAgogKgAhaCVQgEAAgDABQgsAVgWAsIAAAHQgDAsAKAdQAAAEACACQAZAeAnAPIAHAAQBtACAGhoIgBgHQgMhZhiAAIgLABgAlfD0IgHgBQgfgMgGgmIAAgIIAAhmIAAgHIAAgHQB7ilENgRIAGAAQhuiii2hfQgEgDAAgKQA2gZA6AqQCIBhBiCGQB5h7DNglIAIgBQASELgSEKIAAAHIgIAAIkEAAQAAgEgCgDQgPgfgFgqQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAgBQglhChKgbIgHAAIheAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQhjAjgfBjIAAAWIAAAIIgHABQgZAHgjAAQgQAAgSgBgAlYBMQgFAxAegGQBfgTghhEIAAgEIgEAAQg/AAgUAwgADkhpQBCgDAxgMIAAgIQAGhDgNgyIgHABQhyAthZBHIgHAAQAkAZBJgCg");
	this.shape_10.setTransform(62.525,66.7819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,138,138);


(lib.BTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("אודות ", "48px 'Abraham'");
	this.text.textAlign = "center";
	this.text.lineHeight = 60;
	this.text.alpha = 0.99607843;
	this.text.parent = this;
	this.text.setTransform(80.6,13.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(7,1,1).p("ArnkCIXPAAQAnAAAAAzIAAGgQAAAygnAAI3PAAQgnAAAAgyIAAmgQAAgzAnAAg");
	this.shape.setTransform(78.275,38.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,9.3,163.6,131.29999999999998);


(lib.btm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("X", "100px 'Forte'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 111;
	this.text.lineWidth = 122;
	this.text.parent = this;
	this.text.setTransform(-54,-61.15,0.2857,0.2894);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape.setTransform(-53.45,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#323232"}}]},1).to({state:[{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-66,45.00000000000001,49.1);


(lib.textinfo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		
		var self = this;
		
		self.coin.addEventListener("click", goURL);
		
		function goURL(){
		    window.open("https://www.hit.ac.il/");
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1));

	// Layer_1
	this.text = new cjs.Text("נוריות אלו נועדו לספק לנהג מידע, ועל כן ניתן .להמשיך בניסעה כרגיל", "50px 'Abraham'", "#323232");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 910;
	this.text.parent = this;
	this.text.setTransform(700.75,225.95);

	this.text_1 = new cjs.Text("נוריות חיווי ירוקות", "100px 'Abraham'", "#323232");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 122;
	this.text_1.lineWidth = 746;
	this.text_1.parent = this;
	this.text_1.setTransform(814.7,64.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(159,190,61,0.992)").s().p("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");
	this.shape.setTransform(613.6781,577.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFAF5").s().p("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");
	this.shape_1.setTransform(643.875,400.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6E").s().p("EhM1ABhIAAjBMCZrAAAIAADBg");
	this.shape_2.setTransform(603.825,62.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(37,37,37,0.647)").s().p("EhkHA4AMAAAhv+MDIPAAAMAAABv+gEhS8A06MCm2AAAMAAAhmqIs2AAIAAjCMiZrAAAIAADCIgVAAg");
	this.shape_3.setTransform(640.825,390.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(253,198,46,0.992)").s().p("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");
	this.shape_4.setTransform(613.6781,577.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(220,2,25,0.992)").s().p("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");
	this.shape_5.setTransform(613.6781,577.875);

	this.instance = new lib.g1();
	this.instance.setTransform(326.05,586,1.4062,1.5843,0,0,0,103.4,65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBFAF5").s().p("EhTaAzWMAAAhmrIAUAAMCZsAAAIM1AAMAAABmrg");
	this.shape_6.setTransform(643.875,400.925);

	this.instance_1 = new lib.Y1();
	this.instance_1.setTransform(303.95,545.7,0.8269,0.8049,0,0,0,196.4,174.2);

	this.instance_2 = new lib.Y2();
	this.instance_2.setTransform(322.5,541.55,0.8034,0.846,0,0,0,145.1,168.8);

	this.instance_3 = new lib.R1();
	this.instance_3.setTransform(297.9,589.95,0.8567,0.8381,0,0,0,167.4,123.6);

	this.instance_4 = new lib.R2();
	this.instance_4.setTransform(292.95,619,1,1,0,0,0,144.4,81.6);

	this.instance_5 = new lib.R3();
	this.instance_5.setTransform(265.7,594.7,1,1,0,0,0,116.5,77.1);

	this.instance_6 = new lib.Y3();
	this.instance_6.setTransform(290.1,621.45,0.5639,0.6565,0,0,0,255.7,124.8);

	this.instance_7 = new lib.G2();
	this.instance_7.setTransform(258.5,579.95,1,1,0,0,0,101.5,102);

	this.instance_8 = new lib.Y5();
	this.instance_8.setTransform(307.2,584.25,1,1,0,0,0,148.6,89.2);

	this.instance_9 = new lib.Y4();
	this.instance_9.setTransform(292.85,593.7,1.5515,1.6033,0,0,0,85.5,61.6);

	this.instance_10 = new lib.r4();
	this.instance_10.setTransform(290.05,608.55,0.7781,0.8264,0,0,0,167.4,123.6);

	this.instance_11 = new lib.logo();
	this.instance_11.setTransform(798.6,242.25,0.3174,0.2275,29.997,0,0,132.1,152.7);

	this.coin = new lib.coin();
	this.coin.name = "coin";
	this.coin.setTransform(667.05,655.7,0.6576,0.6165,0,0,0,179.3,104.3);

	this.text_2 = new cjs.Text("אודות ", "100px 'Abraham'", "#323232");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 122;
	this.text_2.lineWidth = 1086;
	this.text_2.parent = this;
	this.text_2.setTransform(672,75.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{text:"נוריות חיווי ירוקות",x:814.7,lineWidth:746,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נוריות אלו נועדו לספק לנהג מידע, ועל כן ניתן .להמשיך בניסעה כרגיל",x:700.75,y:225.95,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_4},{t:this.text_1,p:{text:"נוריות חיווי צהובות",x:814.7,lineWidth:746,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נוריות אלו מעידות על בעיה מסויימת, אך אל חשש ניתן להמשיך בנסיעה מומלץ לגשת .במהרה למוסך לצורך בדיקה",x:700.75,y:225.95,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5},{t:this.text_1,p:{text:"נוריות חיווי אדומות",x:814.7,lineWidth:746,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נוריות אלו מעידות על בעיה מיידית ברכב, יש .לרדת לשול בזהירות ולהזמין גרר",x:700.75,y:225.95,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"נורית אור מעבר",x:814.7,lineWidth:746,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נורית זו מסמלת כי התאורה הרגילה של הרכב עובדת, חשוב לשים לב אליה בעיקר בתקופת החורף שהחוק מחייב נהיגה עם אורות מעבר",x:662.75,y:213.9,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"נורית תאורה חיצונית ",x:781.7,lineWidth:784,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נורה זו מציינת כי אחת מנורות הרכב נשרפה ועל כן יש לגשת ולהחליפה במיידי",x:662.75,y:213.9,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"נורית בקרת יציבות  ",x:795.7,lineWidth:784,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נורה זו מעדכנת כי מערכת בקרת היציבות מנותקת",x:662.75,y:213.9,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"נורית התחממות מערכת הבלימה   ",x:664.75,lineWidth:1086,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"יש לעצור את הרכב במיידי ולאחר התקררות המערכת לגשת במידי למוסך",x:662.75,y:313.4,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_3}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"מחסור בשמן מנוע   ",x:664.75,lineWidth:1086,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"יש לעצור את הרכב במיידית ולבדוק את שמן המנוע באמצעות מדיד כמו כן אין להמשיך נסיעה עד למילוי השמן ומשם ישירות למוסך ",x:662.75,y:236.3,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"חום יתר במנוע  ",x:664.75,lineWidth:1086,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"יש לעצור את הרכב במיידית מדובר בבעיה במערכת הצינון או לחילופין מחסור בנוזל, אין למלא נוזל לפניי שהמנוע מתקרר בסיום יש לגשת למוסך",x:662.75,y:236.3,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_5}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"מפתח חכם לא זוהה ",x:664.75,lineWidth:1086,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נורה זו תופיע כאשר המפתח החכם לא מזוהה בסביבת הנהג או כאשר המערכת אינה מזהה את האימובילייזר המובנה במפתח הרגיל שימו לב כי תיתכן גם התרעה קולית",x:662.75,y:236.3,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_6}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"עצור וסע ",x:664.75,lineWidth:1086,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"כאשר נורה זו מופעלת הרכב כבה בכל עצירה ומותנע אוטומטית עם הסרת הרגל מדוושת הבלם במרבית הרכבים ניתן לבטל מצב זה",x:662.75,y:236.3,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_7}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"מצבר ",x:664.75,lineWidth:1086,y:64.35,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"תקלה במערכת הטעינה ומשמעותה שהמצבר אינו טעון כנדרש או אינו נטען כראוי יש לכבות אלמנטים שצורכים חשמל ברכב בעיקר מזגן ולהגיע למוסך",x:662.75,y:236.3,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_8}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:" מנוע ומערכות היקפיות ",x:672,lineWidth:1086,y:75.95,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נורית זו מצביעה על בעיה בתפקוד המנוע שיכולה להיגרם בעקבות הצתה לקויה בעיות בהזרקת הדלק או תקלה במערכת הפליטה ניתן להמשיך בנסיעה אך יש להגיע בבהילות למוסך",x:662.75,y:236.3,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_9}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_1,p:{text:"בלם חניה לא משוחרר ",x:672,lineWidth:1086,y:75.95,font:"100px 'Abraham'",lineHeight:122}},{t:this.text,p:{text:"נורית זו מופעלת כאשר בלם החנייה בפעולה ועם הפסקת פעולתו היא נכבת היה ונדלקת באמצע נסיעה ישנה בעיה במערכת הבלימה ויש לטפל בתקלה באופן מיידי ובהול",x:662.75,y:236.3,font:"50px 'Abraham'",lineHeight:62,lineWidth:910}},{t:this.instance_10}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.text_2},{t:this.text_1,p:{text:"lights on",x:662.75,lineWidth:910,y:236.3,font:"bold 60px 'Berlin Sans FB Demi'",lineHeight:69.4}},{t:this.text,p:{text:"ייצוג זה הופק כחלק מפרוייקט משותף לקורסים \"ארגון וייצוג ידע\" ו-\"מבוא לתכנות אינטרקציה ואנימציה\" בפקולטה לטכנולוגיות למידה \n\nתשפ\"ב | 2021\n\nע\"י אנה מיכאלי ודדון ששירן ",x:684.95,y:313.4,font:"30px 'Abraham'",lineHeight:38,lineWidth:719}},{t:this.coin},{t:this.instance_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,32.6,1281.7,776.8);


(lib.gauge = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text1 = new cjs.Text("עברו או לחצו על אחד .הצבעים    ", "25px 'Abraham'", "#666666");
	this.text1.name = "text1";
	this.text1.textAlign = "center";
	this.text1.lineHeight = 32;
	this.text1.lineWidth = 246;
	this.text1.parent = this;
	this.text1.setTransform(148.95,188.55);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(143.9,160.8,0.6761,0.7784,-105.0025,0,0,36.6,79.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:36.6,regY:79.7,scaleY:0.7784,rotation:-105.0025,x:143.9,y:160.8}},{t:this.text1,p:{text:"עברו או לחצו על אחד .הצבעים    ",font:"25px 'Abraham'",lineHeight:32}}]}).to({state:[{t:this.instance,p:{regX:36.5,regY:79.6,scaleY:0.7785,rotation:-75.0006,x:118.4,y:144.8}},{t:this.text1,p:{text:"",font:"40px 'Abraham'",lineHeight:50}}]},1).to({state:[{t:this.instance,p:{regX:36.5,regY:79.7,scaleY:0.7785,rotation:-14.9997,x:141.9,y:132.85}},{t:this.text1,p:{text:"",font:"40px 'Abraham'",lineHeight:50}}]},1).to({state:[{t:this.instance,p:{regX:36.6,regY:79.7,scaleY:0.7784,rotation:44.9976,x:149.9,y:138.85}},{t:this.text1,p:{text:"",font:"40px 'Abraham'",lineHeight:50}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24,66.6,250,285.29999999999995);


// stage content:
(lib.lighton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		
		self.green.addEventListener("mouseover", greenin);
		self.yeloow.addEventListener("mouseover", yellwoin);
		self.red.addEventListener("mouseover", redin);
		
		self.green.addEventListener("mouseout", greenout);
		self.yeloow.addEventListener("mouseout", yellwoout);
		self.red.addEventListener("mouseout", redout);
		
		
		function greenin() {
			self.gauge.gotoAndPlay(1);
			self.gauge.text1.text = "המשך בנסיעה";
			self.gauge.text1.color = "#9FBE3D";
			self.red.alpha = 0.5;
			self.yeloow.alpha = 0.5;
			self.g1.gotoAndPlay(1);
			self.g2.gotoAndPlay(1);
		}
		
		function greenout() {
			self.gauge.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
			self.red.alpha = 1;
			self.yeloow.alpha = 1;
			self.g1.gotoAndPlay(0);
			self.g2.gotoAndPlay(0);
		
		}
		
		function yellwoin() {
			self.gauge.gotoAndPlay(2);
			self.gauge.text1.text = " המשך בנסיעה למסוך ";
			self.gauge.text1.color = "#FDC62E";
			self.red.alpha = 0.5;
			self.green.alpha = 0.5;
			self.y1.gotoAndPlay(1);
			self.y2.gotoAndPlay(1);
			self.y3.gotoAndPlay(1);
			self.y4.gotoAndPlay(1);
			self.y5.gotoAndPlay(1);
		}
		
		function yellwoout() {
			self.gauge.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
			self.red.alpha = 1;
			self.green.alpha = 1;
			self.y1.gotoAndPlay(0);
			self.y2.gotoAndPlay(0);
			self.y3.gotoAndPlay(0);
			self.y4.gotoAndPlay(0);
			self.y5.gotoAndPlay(0);
		}
		
		
		function redin() {
			self.gauge.gotoAndPlay(3);
			self.gauge.text1.text = " !עצור ";
			self.gauge.text1.color = "#DC0219";
			self.yeloow.alpha = 0.5;
			self.green.alpha = 0.5;
			self.r1.gotoAndPlay(1);
			self.r2.gotoAndPlay(1);
			self.r3.gotoAndPlay(1);
			self.r4.gotoAndPlay(1);
		}
		
		function redout() {
			self.gauge.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
			self.yeloow.alpha = 1;
			self.green.alpha = 1;
			self.r1.gotoAndPlay(0);
			self.r2.gotoAndPlay(0);
			self.r3.gotoAndPlay(0);
			self.r4.gotoAndPlay(0);
		
		}
		
		self.info.visible = false;
		self.btn.visible = false;
		
		self.green.addEventListener("click", infogreen);
		self.yeloow.addEventListener("click", infoyellwo);
		self.red.addEventListener("click", infored);
		self.btn.addEventListener("click", closeMc);
		self.g1.addEventListener("click", g1);
		self.y1.addEventListener("click", y1);
		self.y2.addEventListener("click", y2);
		self.r1.addEventListener("click", r1);
		self.r2.addEventListener("click", r2);
		self.r3.addEventListener("click", r3);
		self.y3.addEventListener("click", y3);
		self.g2.addEventListener("click", g2);
		self.y5.addEventListener("click", y5);
		self.y4.addEventListener("click", y4);
		self.r4.addEventListener("click", r4);
		self.btn1.addEventListener("click", btn1);
		
		function btn1() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(14);
		} 
		
		function r4() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(13);
		} 
		
		function y4() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(12);
		} 
		
		
		function y5() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(11);
		} 
		
		function g2() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(10);
		} 
		
		function y3() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(9);
		} 
		
		function r3() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(8);
		} 
		
		function r2() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(7);
		} 
		
		function r1() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(6);
		}
		
		function y2() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(5);
		}
		
		function y1() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(4);
		}
		
		function g1() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(3);
		}
		
		function infogreen() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(15);
		}
		
		function infoyellwo() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(1);
		}
		
		function infored() {
			self.info.visible = true;
			self.btn.visible = true;
			self.info.gotoAndPlay(2);
		}
		
		
		function closeMc() {
			self.info.visible = false;
			self.btn.visible = false;
		}
		
		
		self.c1.addEventListener("mouseover", c1in);
		self.c2.addEventListener("mouseover", c2in);
		self.c3.addEventListener("mouseover", c3in);
		self.c4.addEventListener("mouseover", c4in);
		
		self.c1.addEventListener("mouseout", c1out);
		self.c2.addEventListener("mouseout", c2out);
		self.c3.addEventListener("mouseout", c3out);
		self.c4.addEventListener("mouseout", c4out);
		
		function c1in() {
			self.text3.text = "רכב - כללי";
			self.text3.color = "#C25344";
			self.c1.gotoAndPlay(1);
			self.y3.gotoAndPlay(1);
			self.g2.gotoAndPlay(1);
		}
		
		function c1out() {
			self.text3.color = "#6F6F6E";
			self.c1.gotoAndPlay(0);
			self.y3.gotoAndPlay(0);
			self.g2.gotoAndPlay(0);
		
		}
		
		function c2in() {
			self.text3.text = "מנוע";
			self.text3.color = "#C25344";
			self.c2.gotoAndPlay(1);
			self.r2.gotoAndPlay(1);
			self.r3.gotoAndPlay(1);
			self.y5.gotoAndPlay(1);
			self.y4.gotoAndPlay(1);
		}
		
		function c2out() {
			self.text3.color = "#6F6F6E";
			self.c2.gotoAndPlay(0);
			self.r2.gotoAndPlay(0);
			self.r3.gotoAndPlay(0);
			self.y5.gotoAndPlay(0);
			self.y4.gotoAndPlay(0);
		
		}
		
		function c3in() {
			self.text3.text = "גלגלים";
			self.text3.color = "#C25344";
			self.c3.gotoAndPlay(1);
			self.y2.gotoAndPlay(1);
			self.r1.gotoAndPlay(1);
			self.g3.gotoAndPlay(1);
			self.r4.gotoAndPlay(1);
		
		}
		
		function c3out() {
			self.text3.color = "#6F6F6E";
			self.c3.gotoAndPlay(0);
			self.y2.gotoAndPlay(0);
			self.r1.gotoAndPlay(0);
			self.g3.gotoAndPlay(0);
			self.r4.gotoAndPlay(0);
		
		}
		
		function c4in() {
			self.text3.text = "פנסים";
			self.text3.color = "#C25344";
			self.c4.gotoAndPlay(1);
			self.g1.gotoAndPlay(1);
			self.y1.gotoAndPlay(1);
		}
		
		function c4out() {
			self.text3.color = "#6F6F6E";
			self.c4.gotoAndPlay(0);
			self.g1.gotoAndPlay(0);
			self.y1.gotoAndPlay(0);
		
		
		}
		
		
		self.y3.addEventListener("mouseover", y3in);
		self.y3.addEventListener("mouseout", y3out);
		
		
		function y3in() {
			self.gauge.gotoAndPlay(2);
			self.gauge.text1.text = " המשך בנסיעה למסוך ";
			self.gauge.text1.color = "#FDC62E";
			self.c1.gotoAndPlay(1);
			self.y3.gotoAndPlay(1);
		
		}
		
		function y3out() {
			self.gauge.gotoAndPlay(0);
			self.c1.gotoAndPlay(0);
			self.y3.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		
		self.g2.addEventListener("mouseover", g2in);
		self.g2.addEventListener("mouseout", g2out);
		
		
		function g2in() {
			self.gauge.gotoAndPlay(1);
			self.gauge.text1.text = "המשך בנסיעה";
			self.gauge.text1.color = "#9FBE3D";
			self.c1.gotoAndPlay(1);
			self.g2.gotoAndPlay(1);
		}
		
		function g2out() {
			self.gauge.gotoAndPlay(0);
			self.c1.gotoAndPlay(0);
			self.g2.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.r2.addEventListener("mouseover", r2in);
		self.r2.addEventListener("mouseout", r2out);
		
		
		function r2in() {
			self.gauge.gotoAndPlay(3);
			self.gauge.text1.text = " !עצור ";
			self.gauge.text1.color = "#DC0219";
			self.c2.gotoAndPlay(1);
			self.r2.gotoAndPlay(1);
		}
		
		function r2out() {
			self.gauge.gotoAndPlay(0);
			self.c2.gotoAndPlay(0);
			self.r2.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.r3.addEventListener("mouseover", r3in);
		self.r3.addEventListener("mouseout", r3out);
		
		
		function r3in() {
			self.gauge.gotoAndPlay(3);
			self.gauge.text1.text = " !עצור ";
			self.gauge.text1.color = "#DC0219";
			self.c2.gotoAndPlay(1);
			self.r3.gotoAndPlay(1);
		}
		
		function r3out() {
			self.gauge.gotoAndPlay(0);
			self.c2.gotoAndPlay(0);
			self.r3.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.y5.addEventListener("mouseover", y5in);
		self.y5.addEventListener("mouseout", y5out);
		
		
		function y5in() {
			self.gauge.gotoAndPlay(2);
			self.gauge.text1.text = " המשך בנסיעה למסוך ";
			self.gauge.text1.color = "#FDC62E";
			self.c2.gotoAndPlay(1);
			self.y5.gotoAndPlay(1);
		}
		
		function y5out() {
			self.gauge.gotoAndPlay(0);
			self.c2.gotoAndPlay(0);
			self.y5.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.y4.addEventListener("mouseover", y4in);
		self.y4.addEventListener("mouseout", y4out);
		
		
		function y4in() {
			self.gauge.gotoAndPlay(2);
			self.gauge.text1.text = " המשך בנסיעה למסוך ";
			self.gauge.text1.color = "#FDC62E";
			self.c2.gotoAndPlay(1);
			self.y4.gotoAndPlay(1);
		}
		
		function y4out() {
			self.gauge.gotoAndPlay(0);
			self.c2.gotoAndPlay(0);
			self.y4.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.y2.addEventListener("mouseover", y2in);
		self.y2.addEventListener("mouseout", y2out);
		
		
		function y2in() {
			self.gauge.gotoAndPlay(2);
			self.gauge.text1.text = " המשך בנסיעה למסוך ";
			self.gauge.text1.color = "#FDC62E";
			self.c3.gotoAndPlay(1);
			self.y2.gotoAndPlay(1);
		}
		
		function y2out() {
			self.gauge.gotoAndPlay(0);
			self.c3.gotoAndPlay(0);
			self.y2.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.r1.addEventListener("mouseover", r1in);
		self.r1.addEventListener("mouseout", r1out);
		
		
		function r1in() {
			self.gauge.gotoAndPlay(3);
			self.gauge.text1.text = " !עצור ";
			self.gauge.text1.color = "#DC0219";
			self.c3.gotoAndPlay(1);
			self.r1.gotoAndPlay(1);
		}
		
		function r1out() {
			self.gauge.gotoAndPlay(0);
			self.c3.gotoAndPlay(0);
			self.r1.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.r4.addEventListener("mouseover", r4in);
		self.r4.addEventListener("mouseout", r4out);
		
		
		function r4in() {
			self.gauge.gotoAndPlay(3);
			self.gauge.text1.text = " !עצור ";
			self.gauge.text1.color = "#DC0219";
			self.c3.gotoAndPlay(1);
			self.r4.gotoAndPlay(1);
		}
		
		function r4out() {
			self.gauge.gotoAndPlay(0);
			self.c3.gotoAndPlay(0);
			self.r4.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.g3.addEventListener("mouseover", g3in);
		self.g3.addEventListener("mouseout", g3out);
		
		
		function g3in() {
			self.gauge.gotoAndPlay(1);
			self.gauge.text1.text = "המשך בנסיעה";
			self.gauge.text1.color = "#9FBE3D";
			self.c3.gotoAndPlay(1);
			self.g3.gotoAndPlay(1);
		}
		
		function g3out() {
			self.gauge.gotoAndPlay(0);
			self.c3.gotoAndPlay(0);
			self.g3.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.g1.addEventListener("mouseover", g1in);
		self.g1.addEventListener("mouseout", g1out);
		
		
		function g1in() {
			self.gauge.gotoAndPlay(1);
			self.gauge.text1.text = "המשך בנסיעה";
			self.gauge.text1.color = "#9FBE3D";
			self.c4.gotoAndPlay(1);
			self.g1.gotoAndPlay(1);
		}
		
		function g1out() {
			self.gauge.gotoAndPlay(0);
			self.c4.gotoAndPlay(0);
			self.g1.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
		
		self.y1.addEventListener("mouseover", y1in);
		self.y1.addEventListener("mouseout", y1out);
		
		
		function y1in() {
			self.gauge.gotoAndPlay(2);
			self.gauge.text1.text = " המשך בנסיעה למסוך ";
			self.gauge.text1.color = "#FDC62E";
			self.c4.gotoAndPlay(1);
			self.y1.gotoAndPlay(1);
		}
		
		function y1out() {
			self.gauge.gotoAndPlay(0);
			self.c4.gotoAndPlay(0);
			self.y1.gotoAndPlay(0);
			self.gauge.text1.color = "#666666";
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// info
	this.btn = new lib.btm();
	this.btn.name = "btn";
	this.btn.setTransform(255.6,153.6,1.8401,1.4841,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btm(), 3);

	this.info = new lib.textinfo();
	this.info.name = "info";
	this.info.setTransform(637.15,360.35,1,1,0,0,0,640.8,390.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.info},{t:this.btn}]}).wait(1));

	// Layer_6
	this.instance = new lib.logo();
	this.instance.setTransform(852.6,62.6,0.2014,0.1521,29.9937,0,0,132.5,152.7);

	this.text = new cjs.Text("lights on", "bold 100px 'Berlin Sans FB Demi'", "#323232");
	this.text.textAlign = "center";
	this.text.lineHeight = 114;
	this.text.lineWidth = 910;
	this.text.parent = this;
	this.text.setTransform(640,5.9);

	this.btn1 = new lib.BTN();
	this.btn1.name = "btn1";
	this.btn1.setTransform(104.35,88.35,1,1,0,0,0,78.2,64.5);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.text},{t:this.instance}]}).wait(1));

	// lamp
	this.y5 = new lib.Y5();
	this.y5.name = "y5";
	this.y5.setTransform(767.05,430.55,0.2829,0.3407,0,0,0,148.6,89.2);

	this.c1 = new lib.cc4();
	this.c1.name = "c1";
	this.c1.setTransform(1092.65,360.9,0.3644,0.319,0,0,0,63.6,63.5);

	this.c3 = new lib.cc3();
	this.c3.name = "c3";
	this.c3.setTransform(1132.75,491.4,0.4061,0.3922,0,0,0,57.8,57.8);

	this.c4 = new lib.cc2();
	this.c4.name = "c4";
	this.c4.setTransform(1086.15,545.5,0.4118,0.3853,0,0,0,55.2,55.4);

	this.c2 = new lib.cc1();
	this.c2.name = "c2";
	this.c2.setTransform(1132.05,420.65,0.3588,0.3153,0,0,0,64.5,65);

	this.text3 = new cjs.Text("עברו על האייקונים מצד ימין", "25px 'Abraham'", "#6F6F6E");
	this.text3.name = "text3";
	this.text3.textAlign = "center";
	this.text3.lineHeight = 32;
	this.text3.lineWidth = 181;
	this.text3.parent = this;
	this.text3.setTransform(969.0058,431.8,1.08,0.9043);

	this.r4 = new lib.r4();
	this.r4.name = "r4";
	this.r4.setTransform(871.8,227.7,0.2666,0.2445,0,0,0,46.9,31.5);

	this.g2 = new lib.G2();
	this.g2.name = "g2";
	this.g2.setTransform(767.2,529,0.3172,0.3251,0,0,0,31.6,30.6);

	this.y4 = new lib.Y4();
	this.y4.name = "y4";
	this.y4.setTransform(755.05,295.8,0.5502,0.5731,0,0,0,50.1,26.9);

	this.y3 = new lib.Y3();
	this.y3.name = "y3";
	this.y3.setTransform(813.35,611.95,0.2386,0.2169,0,0,0,46.6,19.4);

	this.r3 = new lib.R3();
	this.r3.name = "r3";
	this.r3.setTransform(638.15,601.15,0.3931,0.4817,0,0,0,37.5,32.7);

	this.r2 = new lib.R2();
	this.r2.name = "r2";
	this.r2.setTransform(441.5,612.15,0.405,0.3575,0,0,0,51.1,20.6);

	this.r1 = new lib.R1();
	this.r1.name = "r1";
	this.r1.setTransform(526.2,525.2,0.2694,0.2662,0,0,0,45.6,32.7);

	this.y2 = new lib.Y2();
	this.y2.name = "y2";
	this.y2.setTransform(578.65,411.2,0.2336,0.2041,0,0,0,37.2,34);

	this.y1 = new lib.Y1();
	this.y1.name = "y1";
	this.y1.setTransform(500.65,305.2,0.1979,0.2028,0,0,0,42.7,39.5);

	this.g1 = new lib.g1();
	this.g1.name = "g1";
	this.g1.setTransform(390.1,226.95,0.3047,0.4113);

	this.yeloow = new lib.yeloow();
	this.yeloow.name = "yeloow";
	this.yeloow.setTransform(303.85,358.75,1,1,0,0,0,66.5,27.9);

	this.green = new lib.green();
	this.green.name = "green";
	this.green.setTransform(200.55,417.4,1,1,0,0,0,45,58.6);

	this.red = new lib.red();
	this.red.name = "red";
	this.red.setTransform(408.95,419.6,1,1,0,0,0,44.5,58.8);

	this.gauge = new lib.gauge();
	this.gauge.name = "gauge";
	this.gauge.setTransform(304.45,413.2,1,1,0,0,0,148.9,85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gauge},{t:this.red},{t:this.green},{t:this.yeloow},{t:this.g1},{t:this.y1},{t:this.y2},{t:this.r1},{t:this.r2},{t:this.r3},{t:this.y3},{t:this.y4},{t:this.g2},{t:this.r4},{t:this.text3},{t:this.c2},{t:this.c4},{t:this.c3},{t:this.c1},{t:this.y5}]}).wait(1));

	// panel
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#646369").ss(15,1,1).p("EBRTAAAQAAK7nvHuQntHtq7AAQq6AAnuntQnunuAAq7QAAq6HunuQHuntK6AAQK7AAHtHtQHvHuAAK6gA8lAAQAAK7nuHuQnuHtq6AAQq7AAnuntQnunuAAq7QAAq6HunuQHuntK7AAQK6AAHuHtQHuHuAAK6g");
	this.shape.setTransform(659.25,460.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#646369").ss(19,1,1).p("EhTdgQaQL0xIUolZQGNhkGNAVMBSsAAAQG3AhEMBSQLREQGGFAQEMDLEAEiQSeVEmzZyQklMjsgCQMiT4AAAQplgxlboMQpyuPE2veQC5pOGNoxg");
	this.shape_1.setTransform(647.8194,431.9178);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.651)").s().p("AAAAGIAAgLIABAAIAAAKIAAABg");
	this.shape_2.setTransform(1094.025,514.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC0219").s().p("AgBAAIAAAAIADAAg");
	this.shape_3.setTransform(1128.825,475.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.275)").s().p("AAAAFIAAgJIABAAIAAAIIAAABg");
	this.shape_4.setTransform(1112.025,455.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("AiZAlIgBgBQgSgHgBgYIAAgCIAAgIIAAgBIAAgFQADgTAQgGIABgBICJABIBrgBIA/AAQAPAEADAPIABABQAIAngaAOIgBABIg/AAIhrAAIgQABg");
	this.shape_5.setTransform(1129.533,455.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.267)").s().p("AgQAmIgQAAIAQAAIBrgBIA/AAQgfACgiAAIhpgBgAiZgkIAAgBICJAAIBrgBQAhAAAeACIg/AAIhrAAIiJAAg");
	this.shape_6.setTransform(1129.525,455.395);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.992)").s().p("AjwTeIAAgBIhhiQQgZglgWgmIAAgJIgFAAIgJgQIgBgCQATgjAyAEIADgBIBhCRQAgAwAeAzQgQAkgqAAIgOgBgAC+KVQg4gcg1ggQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAAgLIAAgBIAAgEQAJgcAbgMIAAgBIAKAAICiBUQA3AbA2AeQAGAYgMASQgMAQgXAEIgEAAIiihSgABQpSIAAgEQBOgsBRgpQA6gcA4geIALAAQAjAPABAqIAAAEQhPArhSApQg4Acg4AeQgtgHgCgxgAmJvcQgFgGgBgKIAAgBIBiiUIA7hbQAhgIAWATIAOAKIAEALIABABQguBNgxBJIhABfIgMABQgiAAgUgXg");
	this.shape_7.setTransform(1086.125,455.356);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBFAF5").s().p("EAkUASoQnvntABq7QgBq5HvnvQHtntK7AAQK6AAHvHtQHtHvABK5QgBK7ntHtQnvHuq6AAQq7AAntnugEA8dAOxIAAACIAJAQIAFAAIAAAJQAXAmAZAlIBhCQIAAABQA2AIARgrQgegzgggwIhgiRIgDABIgKAAQgqAAgRAfgEBD8AIgIABAAQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQA1AfA4AcICiBTIAEgBQAXgEALgQQANgSgGgYQg2gdg3gcIiihUIgKAAIAAABQgbAMgJAdIAAADIAAABIgCAAIABAMgEBJVACZIAFAAIgFgBgEBGwgAvIABAAQAAAYATAHIABAAIB5ABIAPAAIBrABQAiAAAfgCIABAAQAagOgJgoIAAgBQgEgPgOgEQgegCgiABIhsAAIiIAAIAAABIgBABQgQAGgDATIAAAFIAAABIgCAAIABALgEBGcgLhQhSAphNAsIAAAEQACAyAtAGQA4gdA4gcQBRgqBPgrIAAgDQAAgrgkgPIgKAAQg5Aeg5AcgEA+6gUSIg8BcIhhCTIAAABQABAKAEAGQAZAbAqgEIBAhgQAxhJAthNIAAgBIgEgLIgOgKQgQgNgVAAQgIAAgKACgEhJkASoQntntgBq7QABq5HtnvQHvntK6AAQK7AAHtHtQHvHvgBK5QABK7nvHtQntHuq7AAQq6AAnvnug");
	this.shape_8.setTransform(659.25,460.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#343434").s().p("EhInAoPQplgxlboMQpyuPE2veQC5pOGNoxQL0xIUolZQGNhkGNAVMBSsAAAQG3AhEMBSQLREQGGFAQEMDLEAEiQSeVEmzZyQklMjsgCQgEAmGgOHQnuHuAAK5QAAK7HuHuQHuHuK6AAQK7AAHunuQHunuAAq7QAAq5nunuQnunuq7AAQq6AAnuHugEhHxgOHQnuHuAAK5QAAK7HuHuQHuHuK6AAQK7AAHunuQHunuAAq7QAAq5nunuQnunuq7AAQq6AAnuHug");
	this.shape_9.setTransform(647.8194,431.9178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// background
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBFAF5").s().p("EhkHA4AMAAAhv/MDIPAAAMAAABv/g");
	this.shape_10.setTransform(640.825,359.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(636.4,361.6,645.3000000000001,357.1);
// library properties:
lib.properties = {
	id: '6639A9E04C301B4F8EA4526272B333F9',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#BBBBBB",
	opacity: 1.00,
	manifest: [
		{src:"images/light on_atlas_1.png?1633626081754", id:"light on_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6639A9E04C301B4F8EA4526272B333F9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;