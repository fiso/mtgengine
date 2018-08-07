"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Persuasion extends UnimplementedCard {
  constructor (game) {
    super(game, "Persuasion", "Tenth Edition", "10E");
  }
}

module.exports = Persuasion;
