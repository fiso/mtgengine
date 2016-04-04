"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Delraich extends Card {
  constructor(game) {
    super(game, "Delraich", "Mercadian Masques", "MMQ");
  }
}

module.exports = Delraich;
