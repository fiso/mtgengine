"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Arrest extends UnimplementedCard {
  constructor(game) {
    super(game, "Arrest", "Media Inserts", "pMEI");
  }
}

module.exports = Arrest;
