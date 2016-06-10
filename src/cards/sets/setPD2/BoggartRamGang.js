"use strict";
const Constants = require ("../../../Constants");
const BoggartRamGangBase = require("../setpGTW/BoggartRamGang");

class BoggartRamGang extends BoggartRamGangBase {
  constructor (game) {
    super(game, "Boggart Ram-Gang", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = BoggartRamGang;
