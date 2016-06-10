"use strict";
const Constants = require ("../../../Constants");
const MountedArchersBase = require("../setTMP/MountedArchers");

class MountedArchers extends MountedArchersBase {
  constructor (game) {
    super(game, "Mounted Archers", "Tempest Remastered", "TPR");
  }
}

module.exports = MountedArchers;
