"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LakeoftheDeadBase = require("../setALL/LakeoftheDead.js");

class LakeoftheDead extends LakeoftheDeadBase {
  constructor(game) {
    super(game, "Lake of the Dead", "Vintage Masters", "VMA");
  }
}

module.exports = LakeoftheDead;
