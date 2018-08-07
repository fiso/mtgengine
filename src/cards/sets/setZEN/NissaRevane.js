"use strict";
const Constants = require ("../../../Constants");
const NissaRevaneBase = require("../setPDP10/NissaRevane");

class NissaRevane extends NissaRevaneBase {
  constructor (game) {
    super(game, "Nissa Revane", "Zendikar", "ZEN");
  }
}

module.exports = NissaRevane;
