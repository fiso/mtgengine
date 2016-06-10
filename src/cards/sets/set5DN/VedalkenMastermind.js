"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenMastermind extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Mastermind", "Fifth Dawn", "5DN");
  }
}

module.exports = VedalkenMastermind;
