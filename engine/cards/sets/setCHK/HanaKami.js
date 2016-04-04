"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HanaKami extends Card {
  constructor(game) {
    super(game, "Hana Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HanaKami;
