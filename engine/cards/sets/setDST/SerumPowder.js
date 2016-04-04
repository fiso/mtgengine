"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerumPowder extends UnimplementedCard {
  constructor(game) {
    super(game, "Serum Powder", "Darksteel", "DST");
  }
}

module.exports = SerumPowder;
