"use strict";
const Constants = require ("../../../Constants");
const LegionConquistadorBase = require("../setRIX/LegionConquistador");

class LegionConquistador extends LegionConquistadorBase {
  constructor (game) {
    super(game, "Legion Conquistador", "Ixalan", "XLN");
  }
}

module.exports = LegionConquistador;
