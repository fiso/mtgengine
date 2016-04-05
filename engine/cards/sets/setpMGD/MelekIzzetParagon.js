"use strict";
const Constants = require ("../../../Constants");
const MelekIzzetParagonBase = require("../setC15/MelekIzzetParagon");

class MelekIzzetParagon extends MelekIzzetParagonBase {
  constructor(game) {
    super(game, "Melek, Izzet Paragon", "Magic Game Day", "pMGD");
  }
}

module.exports = MelekIzzetParagon;
