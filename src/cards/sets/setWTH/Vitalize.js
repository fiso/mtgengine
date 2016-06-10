"use strict";
const Constants = require ("../../../Constants");
const VitalizeBase = require("../set6ED/Vitalize");

class Vitalize extends VitalizeBase {
  constructor (game) {
    super(game, "Vitalize", "Weatherlight", "WTH");
  }
}

module.exports = Vitalize;
