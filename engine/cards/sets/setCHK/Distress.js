"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Distress extends Card {
  constructor(game) {
    super(game, "Distress", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Distress;
