"use strict";
const Constants = require ("../../../Constants");
const BonetoAshBase = require("../setDKA/BonetoAsh");

class BonetoAsh extends BonetoAshBase {
  constructor(game) {
    super(game, "Bone to Ash", "Magic Origins", "ORI");
  }
}

module.exports = BonetoAsh;
