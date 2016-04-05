"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionRats extends UnimplementedCard {
  constructor(game) {
    super(game, "Carrion Rats", "Torment", "TOR");
  }
}

module.exports = CarrionRats;
