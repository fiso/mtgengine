"use strict";
const Constants = require ("../../../Constants");
const TriassicEggBase = require("../setCHR/TriassicEgg");

class TriassicEgg extends TriassicEggBase {
  constructor(game) {
    super(game, "Triassic Egg", "Masters Edition IV", "ME4");
  }
}

module.exports = TriassicEgg;
