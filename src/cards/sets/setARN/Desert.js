"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Desert extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert", "Arabian Nights", "ARN");
  }
}

module.exports = Desert;
