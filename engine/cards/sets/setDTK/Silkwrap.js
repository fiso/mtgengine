"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Silkwrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Silkwrap", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Silkwrap;
