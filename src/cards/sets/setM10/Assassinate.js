"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Assassinate extends UnimplementedCard {
  constructor (game) {
    super(game, "Assassinate", "Magic 2010", "M10");
  }
}

module.exports = Assassinate;
