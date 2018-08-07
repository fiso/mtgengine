"use strict";
const Constants = require ("../../../Constants");
const TsabosAssassinBase = require("../setWC01/TsabosAssassin");

class TsabosAssassin extends TsabosAssassinBase {
  constructor (game) {
    super(game, "Tsabo's Assassin", "Invasion", "INV");
  }
}

module.exports = TsabosAssassin;
