"use strict";
const Constants = require ("../../../Constants");
const BoneShredderBase = require("../setDDE/BoneShredder");

class BoneShredder extends BoneShredderBase {
  constructor(game) {
    super(game, "Bone Shredder", "Urza's Legacy", "ULG");
  }
}

module.exports = BoneShredder;
