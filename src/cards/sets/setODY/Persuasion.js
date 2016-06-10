"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Persuasion extends UnimplementedCard {
  constructor (game) {
    super(game, "Persuasion", "Odyssey", "ODY");
  }
}

module.exports = Persuasion;
