"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Barishi extends Card {
  constructor(game) {
    super(game, "Barishi", "Weatherlight", "WTH");
  }
}

module.exports = Barishi;
