"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IslandofWakWak extends UnimplementedCard {
  constructor(game) {
    super(game, "Island of Wak-Wak", "Arabian Nights", "ARN");
  }
}

module.exports = IslandofWakWak;
