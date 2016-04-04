"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hankyu extends Card {
  constructor(game) {
    super(game, "Hankyu", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Hankyu;
