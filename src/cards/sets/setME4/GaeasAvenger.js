"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaea's Avenger", "Masters Edition IV", "ME4");
  }
}

module.exports = GaeasAvenger;
