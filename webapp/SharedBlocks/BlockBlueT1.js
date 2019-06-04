sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var BlockBlueT1 = BlockBase.extend("sap.uxap.sample.SharedBlocks.BlockBlueT1", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "my.resume.Resume.SharedBlocks.BlockBlueT1",
						type: "XML"
					},
					Expanded: {
						viewName: "my.resume.Resume.SharedBlocks.BlockBlueT1",
						type: "XML"
					}
				}
			}
		});

		return BlockBlueT1;

	});
