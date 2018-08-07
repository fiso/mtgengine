"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UpdraftElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Updraft Elemental", "Dragons of Tarkir", "DTK");
  }
}

module.exports = UpdraftElemental;
