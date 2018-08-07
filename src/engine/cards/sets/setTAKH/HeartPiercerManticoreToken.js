"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartPiercerManticoreToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart-Piercer Manticore Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = HeartPiercerManticoreToken;
