"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Morinfen extends Card {
  constructor(game) {
    super(game, "Morinfen", "Weatherlight", "WTH");
  }
}

module.exports = Morinfen;
