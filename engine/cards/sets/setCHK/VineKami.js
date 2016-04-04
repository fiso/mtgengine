"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VineKami extends Card {
  constructor(game) {
    super(game, "Vine Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = VineKami;
