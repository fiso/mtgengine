"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Firestorm extends Card {
  constructor(game) {
    super(game, "Firestorm", "Weatherlight", "WTH");
  }
}

module.exports = Firestorm;
