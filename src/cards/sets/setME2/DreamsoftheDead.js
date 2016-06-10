"use strict";
const Constants = require ("../../../Constants");
const DreamsoftheDeadBase = require("../setICE/DreamsoftheDead");

class DreamsoftheDead extends DreamsoftheDeadBase {
  constructor (game) {
    super(game, "Dreams of the Dead", "Masters Edition II", "ME2");
  }
}

module.exports = DreamsoftheDead;
