"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kaboom extends UnimplementedCard {
  constructor (game) {
    super(game, "Kaboom!", "Onslaught", "ONS");
  }
}

module.exports = Kaboom;
