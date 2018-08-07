"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Traumatize extends UnimplementedCard {
  constructor (game) {
    super(game, "Traumatize", "Magic 2014", "M14");
  }
}

module.exports = Traumatize;
