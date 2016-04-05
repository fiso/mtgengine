"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunbond extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunbond", "Born of the Gods", "BNG");
  }
}

module.exports = Sunbond;
