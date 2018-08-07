"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialCeratops extends UnimplementedCard {
  constructor (game) {
    super(game, "Imperial Ceratops", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ImperialCeratops;
