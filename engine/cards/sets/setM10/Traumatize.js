"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Traumatize extends UnimplementedCard {
  constructor(game) {
    super(game, "Traumatize", "Magic 2010", "M10");
  }
}

module.exports = Traumatize;
