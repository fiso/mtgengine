"use strict";
const Constants = require ("../../../Constants");
const TriassicEggBase = require("../setME4/TriassicEgg");

class TriassicEgg extends TriassicEggBase {
  constructor (game) {
    super(game, "Triassic Egg", "Legends", "LEG");
  }
}

module.exports = TriassicEgg;
