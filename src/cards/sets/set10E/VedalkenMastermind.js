"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenMastermind extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Mastermind", "Tenth Edition", "10E");
  }
}

module.exports = VedalkenMastermind;
