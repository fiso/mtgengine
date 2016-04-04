"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MountedArchersBase = require("../setTMP/MountedArchers.js");

class MountedArchers extends MountedArchersBase {
  constructor(game) {
    super(game, "Mounted Archers", "Tempest Remastered", "TPR");
  }
}

module.exports = MountedArchers;
