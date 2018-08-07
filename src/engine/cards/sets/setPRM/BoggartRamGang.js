"use strict";
const Constants = require ("../../../Constants");
const BoggartRamGangBase = require("../setPD2/BoggartRamGang");

class BoggartRamGang extends BoggartRamGangBase {
  constructor (game) {
    super(game, "Boggart Ram-Gang", "Magic Online Promos", "PRM");
  }
}

module.exports = BoggartRamGang;
