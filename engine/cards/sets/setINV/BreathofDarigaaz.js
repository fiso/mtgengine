"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BreathofDarigaazBase = require("../setARC/BreathofDarigaaz.js");

class BreathofDarigaaz extends BreathofDarigaazBase {
  constructor(game) {
    super(game, "Breath of Darigaaz", "Invasion", "INV");
  }
}

module.exports = BreathofDarigaaz;
