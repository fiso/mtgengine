"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThousandleggedKami extends Card {
  constructor(game) {
    super(game, "Thousand-legged Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ThousandleggedKami;
