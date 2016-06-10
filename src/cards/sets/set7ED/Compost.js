"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Compost extends UnimplementedCard {
  constructor (game) {
    super(game, "Compost", "Seventh Edition", "7ED");
  }
}

module.exports = Compost;
