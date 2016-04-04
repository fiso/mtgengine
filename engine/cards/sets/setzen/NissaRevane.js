"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NissaRevaneBase = require("../setpMEI/NissaRevane.js");

class NissaRevane extends NissaRevaneBase {
  constructor(game) {
    super(game, "Nissa Revane", "Zendikar", "ZEN");
  }
}

module.exports = NissaRevane;
