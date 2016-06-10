"use strict";
const Constants = require ("../../../Constants");
const NissaRevaneBase = require("../setpMEI/NissaRevane");

class NissaRevane extends NissaRevaneBase {
  constructor (game) {
    super(game, "Nissa Revane", "Zendikar", "ZEN");
  }
}

module.exports = NissaRevane;
