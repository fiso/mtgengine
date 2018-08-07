"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Refibrillator extends UnimplementedCard {
  constructor (game) {
    super(game, "Refibrillator", "Unstable", "UST");
  }
}

module.exports = Refibrillator;
