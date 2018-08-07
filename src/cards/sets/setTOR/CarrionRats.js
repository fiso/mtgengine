"use strict";
const Constants = require ("../../../Constants");
const CarrionRatsBase = require("../setPHUK/CarrionRats");

class CarrionRats extends CarrionRatsBase {
  constructor (game) {
    super(game, "Carrion Rats", "Torment", "TOR");
  }
}

module.exports = CarrionRats;
