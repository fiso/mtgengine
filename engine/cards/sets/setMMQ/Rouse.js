"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rouse extends Card {
  constructor(game) {
    super(game, "Rouse", "Mercadian Masques", "MMQ");
  }
}

module.exports = Rouse;
