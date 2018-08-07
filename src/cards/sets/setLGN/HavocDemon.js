"use strict";
const Constants = require ("../../../Constants");
const HavocDemonBase = require("../setEMA/HavocDemon");

class HavocDemon extends HavocDemonBase {
  constructor (game) {
    super(game, "Havoc Demon", "Legions", "LGN");
  }
}

module.exports = HavocDemon;
