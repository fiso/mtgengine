"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HalloftheBanditLord extends Card {
  constructor(game) {
    super(game, "Hall of the Bandit Lord", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HalloftheBanditLord;
