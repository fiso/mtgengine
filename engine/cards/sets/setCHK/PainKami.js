"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PainKami extends Card {
  constructor(game) {
    super(game, "Pain Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PainKami;
