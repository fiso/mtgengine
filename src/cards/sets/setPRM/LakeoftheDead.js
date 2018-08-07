"use strict";
const Constants = require ("../../../Constants");
const LakeoftheDeadBase = require("../setVMA/LakeoftheDead");

class LakeoftheDead extends LakeoftheDeadBase {
  constructor (game) {
    super(game, "Lake of the Dead", "Magic Online Promos", "PRM");
  }
}

module.exports = LakeoftheDead;
