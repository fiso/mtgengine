"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtseize extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtseize", "Iconic Masters", "IMA");
  }
}

module.exports = Thoughtseize;
