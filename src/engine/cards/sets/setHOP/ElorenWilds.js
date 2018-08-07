"use strict";
const Constants = require ("../../../Constants");
const ElorenWildsBase = require("../setPCA/ElorenWilds");

class ElorenWilds extends ElorenWildsBase {
  constructor (game) {
    super(game, "Eloren Wilds", "Planechase", "HOP");
  }
}

module.exports = ElorenWilds;
