"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reciprocate extends Card {
  constructor(game) {
    super(game, "Reciprocate", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Reciprocate;
