"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crevasse extends UnimplementedCard {
  constructor (game) {
    super(game, "Crevasse", "Legends", "LEG");
  }
}

module.exports = Crevasse;
