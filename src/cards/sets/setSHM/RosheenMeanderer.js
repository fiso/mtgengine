"use strict";
const Constants = require ("../../../Constants");
const RosheenMeandererBase = require("../setIMA/RosheenMeanderer");

class RosheenMeanderer extends RosheenMeandererBase {
  constructor (game) {
    super(game, "Rosheen Meanderer", "Shadowmoor", "SHM");
  }
}

module.exports = RosheenMeanderer;
