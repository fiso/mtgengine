"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aurification extends UnimplementedCard {
  constructor (game) {
    super(game, "Aurification", "Onslaught", "ONS");
  }
}

module.exports = Aurification;
