"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Warmonger extends UnimplementedCard {
  constructor(game) {
    super(game, "Warmonger", "Media Inserts", "pMEI");
  }
}

module.exports = Warmonger;
