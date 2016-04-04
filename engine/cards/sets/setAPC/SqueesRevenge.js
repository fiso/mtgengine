"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SqueesRevenge extends Card {
  constructor(game) {
    super(game, "Squee's Revenge", "Apocalypse", "APC");
  }
}

module.exports = SqueesRevenge;
