"use strict";
const Constants = require ("../../../Constants");
const ThroneofBoneBase = require("../set8ED/ThroneofBone");

class ThroneofBone extends ThroneofBoneBase {
  constructor (game) {
    super(game, "Throne of Bone", "Collectors’ Edition", "CED");
  }
}

module.exports = ThroneofBone;