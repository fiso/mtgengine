"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thwart extends Card {
  constructor(game) {
    super(game, "Thwart", "Mercadian Masques", "MMQ");
  }
}

module.exports = Thwart;
