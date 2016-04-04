"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InnocenceKami extends Card {
  constructor(game) {
    super(game, "Innocence Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = InnocenceKami;
