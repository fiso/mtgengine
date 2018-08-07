"use strict";
const Constants = require ("../../../Constants");
const MirrorworksBase = require("../setC18/Mirrorworks");

class Mirrorworks extends MirrorworksBase {
  constructor (game) {
    super(game, "Mirrorworks", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Mirrorworks;
