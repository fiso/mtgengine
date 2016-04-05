"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Extract extends UnimplementedCard {
  constructor(game) {
    super(game, "Extract", "Odyssey", "ODY");
  }
}

module.exports = Extract;
