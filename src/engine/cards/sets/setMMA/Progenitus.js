"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Progenitus extends UnimplementedCard {
  constructor (game) {
    super(game, "Progenitus", "Modern Masters", "MMA");
  }
}

module.exports = Progenitus;
