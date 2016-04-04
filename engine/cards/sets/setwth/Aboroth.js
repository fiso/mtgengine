"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aboroth extends Card {
  constructor(game) {
    super(game, "Aboroth", "Weatherlight", "WTH");
  }
}

module.exports = Aboroth;
