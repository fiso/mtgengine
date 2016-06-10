"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pyramids extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyramids", "Arabian Nights", "ARN");
  }
}

module.exports = Pyramids;
