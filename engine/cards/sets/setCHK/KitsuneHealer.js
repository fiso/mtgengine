"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KitsuneHealer extends Card {
  constructor(game) {
    super(game, "Kitsune Healer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KitsuneHealer;
