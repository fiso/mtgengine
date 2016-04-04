"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Alms extends Card {
  constructor(game) {
    super(game, "Alms", "Weatherlight", "WTH");
  }
}

module.exports = Alms;
