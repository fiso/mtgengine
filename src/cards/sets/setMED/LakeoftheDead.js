"use strict";
const Constants = require ("../../../Constants");
const LakeoftheDeadBase = require("../setVMA/LakeoftheDead");

class LakeoftheDead extends LakeoftheDeadBase {
  constructor (game) {
    super(game, "Lake of the Dead", "Masters Edition", "MED");
  }
}

module.exports = LakeoftheDead;
