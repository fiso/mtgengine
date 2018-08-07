"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Peregrination extends UnimplementedCard {
  constructor (game) {
    super(game, "Peregrination", "Born of the Gods", "BNG");
  }
}

module.exports = Peregrination;
