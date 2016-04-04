"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RainofBladesBase = require("../set8ED/RainofBlades.js");

class RainofBlades extends RainofBladesBase {
  constructor(game) {
    super(game, "Rain of Blades", "Scourge", "SCG");
  }
}

module.exports = RainofBlades;
