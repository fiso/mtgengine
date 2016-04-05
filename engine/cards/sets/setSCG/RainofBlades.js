"use strict";
const Constants = require ("../../../Constants");
const RainofBladesBase = require("../set8ED/RainofBlades");

class RainofBlades extends RainofBladesBase {
  constructor(game) {
    super(game, "Rain of Blades", "Scourge", "SCG");
  }
}

module.exports = RainofBlades;
