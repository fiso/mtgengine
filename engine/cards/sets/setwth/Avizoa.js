"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Avizoa extends Card {
  constructor(game) {
    super(game, "Avizoa", "Weatherlight", "WTH");
  }
}

module.exports = Avizoa;
