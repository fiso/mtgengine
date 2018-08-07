"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenSpoiling extends UnimplementedCard {
  constructor (game) {
    super(game, "Sudden Spoiling", "Commander 2014", "C14");
  }
}

module.exports = SuddenSpoiling;
