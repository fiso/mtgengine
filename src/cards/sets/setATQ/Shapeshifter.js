"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shapeshifter extends UnimplementedCard {
  constructor (game) {
    super(game, "Shapeshifter", "Antiquities", "ATQ");
  }
}

module.exports = Shapeshifter;
