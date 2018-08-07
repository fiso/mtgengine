"use strict";
const Constants = require ("../../../Constants");
const RainofBladesBase = require("../setM13/RainofBlades");

class RainofBlades extends RainofBladesBase {
  constructor (game) {
    super(game, "Rain of Blades", "Eighth Edition", "8ED");
  }
}

module.exports = RainofBlades;
