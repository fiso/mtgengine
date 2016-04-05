"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasAvenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaea's Avenger", "Antiquities", "ATQ");
  }
}

module.exports = GaeasAvenger;
