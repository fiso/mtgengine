"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KokushotheEveningStar extends Card {
  constructor(game) {
    super(game, "Kokusho, the Evening Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KokushotheEveningStar;
