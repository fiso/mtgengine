"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KuroPitlord extends Card {
  constructor(game) {
    super(game, "Kuro, Pitlord", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KuroPitlord;
