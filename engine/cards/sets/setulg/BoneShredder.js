"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoneShredderBase = require("../setDDE/BoneShredder.js");

class BoneShredder extends BoneShredderBase {
  constructor(game) {
    super(game, "Bone Shredder", "Urza's Legacy", "ULG");
  }
}

module.exports = BoneShredder;
