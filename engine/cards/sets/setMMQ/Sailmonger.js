"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sailmonger extends Card {
  constructor(game) {
    super(game, "Sailmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Sailmonger;
