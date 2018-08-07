"use strict";
const Constants = require ("../../../Constants");
const ThroneofBoneBase = require("../set8ED/ThroneofBone");

class ThroneofBone extends ThroneofBoneBase {
  constructor (game) {
    super(game, "Throne of Bone", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ThroneofBone;
