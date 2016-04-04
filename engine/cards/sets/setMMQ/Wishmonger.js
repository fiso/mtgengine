"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wishmonger extends Card {
  constructor(game) {
    super(game, "Wishmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Wishmonger;
