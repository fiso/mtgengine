"use strict";
const Constants = require ("../../../Constants");
const ReitoLanternBase = require("../setCNS/ReitoLantern");

class ReitoLantern extends ReitoLanternBase {
  constructor (game) {
    super(game, "Reito Lantern", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ReitoLantern;
