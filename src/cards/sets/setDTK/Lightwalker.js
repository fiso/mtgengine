"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lightwalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightwalker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Lightwalker;
