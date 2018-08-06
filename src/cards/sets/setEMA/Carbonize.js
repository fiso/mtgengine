"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carbonize extends UnimplementedCard {
  constructor (game) {
    super(game, "Carbonize", "Eternal Masters", "EMA");
  }
}

module.exports = Carbonize;
