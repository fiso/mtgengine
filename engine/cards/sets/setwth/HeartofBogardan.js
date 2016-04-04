"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartofBogardan extends Card {
  constructor(game) {
    super(game, "Heart of Bogardan", "Weatherlight", "WTH");
  }
}

module.exports = HeartofBogardan;
