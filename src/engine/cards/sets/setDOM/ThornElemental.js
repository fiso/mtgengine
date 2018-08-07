"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Thorn Elemental", "Dominaria", "DOM");
  }
}

module.exports = ThornElemental;
