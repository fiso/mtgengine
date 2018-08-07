"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtleech extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtleech", "Seventh Edition", "7ED");
  }
}

module.exports = Thoughtleech;
