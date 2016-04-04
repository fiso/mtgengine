"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatHart extends UnimplementedCard {
  constructor(game) {
    super(game, "Great Hart", "Born of the Gods", "BNG");
  }
}

module.exports = GreatHart;
