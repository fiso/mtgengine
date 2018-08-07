"use strict";
const Constants = require ("../../../Constants");
const MountedArchersBase = require("../setTPR/MountedArchers");

class MountedArchers extends MountedArchersBase {
  constructor (game) {
    super(game, "Mounted Archers", "Tempest", "TMP");
  }
}

module.exports = MountedArchers;
