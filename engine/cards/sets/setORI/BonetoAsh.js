"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BonetoAshBase = require("../setDKA/BonetoAsh.js");

class BonetoAsh extends BonetoAshBase {
  constructor(game) {
    super(game, "Bone to Ash", "Magic Origins", "ORI");
  }
}

module.exports = BonetoAsh;
