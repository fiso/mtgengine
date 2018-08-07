"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firespout extends UnimplementedCard {
  constructor (game) {
    super(game, "Firespout", "Legendary Cube", "PZ1");
  }
}

module.exports = Firespout;
