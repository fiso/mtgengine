"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Apathy extends Card {
  constructor(game) {
    super(game, "Apathy", "Weatherlight", "WTH");
  }
}

module.exports = Apathy;
