"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HearthKami extends Card {
  constructor(game) {
    super(game, "Hearth Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HearthKami;
