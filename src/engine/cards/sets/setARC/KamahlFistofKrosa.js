"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamahlFistofKrosa extends UnimplementedCard {
  constructor (game) {
    super(game, "Kamahl, Fist of Krosa", "Archenemy", "ARC");
  }
}

module.exports = KamahlFistofKrosa;
