"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Regenerate extends UnimplementedCard {
  constructor(game) {
    super(game, "Regenerate", "Magic 2010", "M10");
  }
}

module.exports = Regenerate;
