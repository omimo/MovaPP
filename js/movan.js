var movan = {

			sidebyside : 1,

			dataTracks : [], // this only keeps the loaded tracks
	 		 allTracks : [],  // this keeps all the tracks that exist in a take


			 //gframes : [],
			 //gskel : [],
			 grootOffset : [],
			 gpadding : 10,

			 //inputFPS : 0.0083, //120

			 defSelectedJoint : 0, //19,
			 //skelHeadJoint : 23,
			 frameSkip : 5,

			figureScale: 0.8, //TODO: Need to add a scale control in the GUI (or automatic detection)


			availableFeatures : [
							[f_angvel,calcVelocities,1],
							[f_accel,calcAccel,1],
							[f_jerk,calcJerk,1],
							[f_overhips,calcJoHips,1],
							[f_directseg,calcSpace_Pathway_Omid,1],
							[f_space,calcSpace_K,1],
							[f_weight,calcWeight_K,1],
							[f_time,calcTime_K,1],
							[f_flow,calcFlow_K,1],
							[f_BEA_Ann,readAnn2,1],
							// [f_Mayo,readAnn2,1]
							],

			selectedFeats : [],

			loadFeatures: function () {

				d3.select("#featDropdown")
				.selectAll("option")
				.data(movan.availableFeatures)
				.enter()
				.append("option")
				.attr("id", function(d,i) {
					return "chkFeat"+i;
				})
				.attr("value",function(d,i) {
					return i;
				})
				.text(function(d,i){
					return d[0].label;
				});
				//.on("change",function(d){movan.reDoFeats();});

			},


			fillDefaultFeatures: function () {
				movan.selectedFeats = [];

				posFrameArray = [];
				for (f=0;f<track.frameCount;f++) {
				posFrameArray[f] = track.getPositionsAt(f);
				}
				track = movan.dataTracks[movan.dataTracks.length - 1].content;

				var len = movan.selectedFeats.length;
				

				var joint = 34;
				var sel =0;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				var sel =1;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				var sel =2;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;


				var joint = 10;
				sel = 0;
			    movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				var sel =1;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				var sel =2;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				sel = 0;
				var joint = 57;
			    movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				var sel =1;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				var sel =2;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				sel = 0;
				var joint = 62;
			    movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				var sel =1;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;

				var sel =2;				
				movan.selectedFeats[len] = [];
				movan.selectedFeats[len].id = len;
				movan.selectedFeats[len].featID = sel;
				movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				movan.selectedFeats[len].joint = track.jointArray[joint];

				len++;
				
				
				movan.reDrawFeat();				
			},

			loadNew: function () {

				var trackURL = document.getElementById("fileSelect").value;
				fileHandler.loadDataTrack(trackURL,movan.callbackForData);

			},

			callbackForData: function(dataTrack, t) {

				movan.dataTracks.push({content: dataTrack, type: t});

				thisTrackIndex = movan.dataTracks.length - 1;

				d3.select("#jointDropdown").attr("selectedJoint", movan.defSelectedJoint);
				//movan.drawJointChooser(movan.dataTracks[thisTrackIndex].content.getTPose());
				movan.drawJointChooser(movan.dataTracks[thisTrackIndex].content);

				movan.reDraw();

				movan.fillDefaultFeatures();

				//console.log(state.tickTime);
				if(t == "BVH"){
					var time = dataTrack.frameTime * dataTrack.frameCount * 1000;
					state.setMaxTime(time);
				//	state.tickTime = dataTrack.frameTime;
				}

				// console.log(movan.dataTracks[thisTrackIndex].content.getPositionsAt(0)[0]);
				// console.log(movan.dataTracks[thisTrackIndex].content.getPositionsAt(0)[1]);
				// console.log(movan.dataTracks[thisTrackIndex].content.getPositionsAt(0)[2]);
				// console.log(movan.dataTracks[thisTrackIndex].content.getPositionsAt(0)[3]);
				// console.log(movan.dataTracks[thisTrackIndex].content.getPositionsAt(0)[4]);
				// console.log(movan.dataTracks[thisTrackIndex].content.getPositionsAt(0)[28]);
				// console.log(movan.dataTracks[thisTrackIndex].content.getPositionsAt(0)[29]);


				// var len = movan.selectedFeats.length;
				// var sel = 10;
				// var joint = 0;

				// track = movan.dataTracks[movan.dataTracks.length - 1].content;

				// posFrameArray = [];
				// for (f=0;f<track.frameCount;f++) {
				// posFrameArray[f] = track.getPositionsAt(f);
				// }

				// movan.selectedFeats[len] = [];
				// movan.selectedFeats[len].id = len;
				// movan.selectedFeats[len].featID = sel;
				// movan.selectedFeats[len].f = movan.availableFeatures[sel][0];
				// //movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, track.jointArray[joint], 0);
				// movan.selectedFeats[len].data = movan.availableFeatures[sel][1](posFrameArray, movan.frameSkip, joint, 0);
				// movan.selectedFeats[len].joint = track.jointArray[joint];

				// movan.reDrawFeat();
			},

			drawJointChooser: function (mocap) {

				frame = mocap.getPositionsAt(0);
				//Draw the joint chooser

				firstFrame = frame.map(function(d) {
					return {
						x : d.x * movan.figureScale + 110,
						y : -1 * d.y * movan.figureScale + 160,
						z : d.z * movan.figureScale
					};
				});

				track = movan.dataTracks[movan.dataTracks.length - 1].content;
				d3.select("#jointLabel").text(track.jointArray[d3.select("#jointDropdown").attr("selectedJoint")].title);


				//Create SVG element
				d3.select("#jointChooser").selectAll("svg").remove();
				var jointChooser = d3.select("#jointChooser").append("svg").attr("height",170);

				//figureSketch.drawJointChooser(jointChooser,firstFrame,0, d3.select("#jointDropdown").attr("selectedJoint")
				//		,movan.gskel,movan.drawJointChooser);

				figureSketch.drawJointChooser(jointChooser, firstFrame, mocap, d3.select("#jointDropdown").attr("selectedJoint")
					,movan.drawJointChooser);

				//d3.select("#jointLabel").text(movan.gskel.jointNames[d3.select("#jointDropdown").attr("selectedJoint")]);

				///
			},

			removeFeature: function(fid) {
				var newSF = [];
				var newCount = 0;


				for (var f in movan.selectedFeats){

				 if (movan.selectedFeats[f].id != fid) {
					 newSF[newCount] = movan.selectedFeats[f];
					 newSF[newCount].id = newCount;
					 newCount++;
				 }
				}


				movan.selectedFeats = newSF;
				movan.calcFeats();
				movan.reDoFeats();
			},

			reDraw: function () {
				movan.frameSkip = $("#sldSkip2").slider( "option", "value" );
				movan.padding = $("#sldPad2").slider( "option", "value" );

				d3.select("#figure").selectAll("svg").remove();
				d3.select("#anim").selectAll("svg").remove();
				d3.select("#trajec").selectAll("svg").remove();

				track = movan.dataTracks[movan.dataTracks.length - 1].content;

				// Draw the figure sketch
				movan.dataTracks[movan.dataTracks.length - 1].rootOffset = figureSketch.drawFiguresCanvas(d3.select("body").select("#figure"),
									track, -1, movan.frameSkip, movan.padding);

				// Prep the animation
				// anim.animSVG = anim.makeAnim(d3.select("body").select("#anim"),
				// 					track, -1, movan.frameSkip, movan.padding);

				//playAnim = true;

				//trajectory.drawTrajectory(d3.select("#trajec"),movan.gframes,19,0,1);
				//figureSketch.drawSkelInfo(d3.select("#trajec"),movan.gframes[0],movan.gskel);

				//movan.makeFeats();
				movan.calcFeats();
				movan.reDrawFeat();
				setSizes();
			},



			reDoFeats: function () {

				//movan.makeFeats();
				movan.reDrawFeat();
			},

			calcFeats: function () {

				track = movan.dataTracks[movan.dataTracks.length - 1].content;

				posFrameArray = [];
				for (f=0;f<track.frameCount;f++) {
					posFrameArray[f] = track.getPositionsAt(f);
				}


			 	for (ii=0;ii<movan.selectedFeats.length;ii++) {
					movan.selectedFeats[ii].data =
						movan.availableFeatures[movan.selectedFeats[ii].featID][1](posFrameArray, movan.frameSkip,movan.selectedFeats[ii].joint,'');
				}
			},

			reDrawFeat: function () {
				drawnLegends = [];
				d3.select("#featureList").selectAll("svg").remove();
				d3.select("#featureList").selectAll("span").remove();
				drawFeatureList(d3.select("#featureList"), movan.dataTracks[movan.dataTracks.length - 1].content, movan.dataTracks[movan.dataTracks.length - 1].rootOffset, movan.selectedFeats, movan.padding);
			}

};
