"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MossKami extends Card {
  constructor(game) {
    super(game, "Moss Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MossKami;
