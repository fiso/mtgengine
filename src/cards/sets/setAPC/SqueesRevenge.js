"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SqueesRevenge extends UnimplementedCard {
  constructor (game) {
    super(game, "Squee's Revenge", "Apocalypse", "APC");
  }
}

module.exports = SqueesRevenge;
