"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurestrikeTrident extends UnimplementedCard {
  constructor(game) {
    super(game, "Surestrike Trident", "Darksteel", "DST");
  }
}

module.exports = SurestrikeTrident;
