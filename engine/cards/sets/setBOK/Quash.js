"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Quash extends Card {
  constructor(game) {
    super(game, "Quash", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Quash;
