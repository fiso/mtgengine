"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaringApprentice extends Card {
  constructor(game) {
    super(game, "Daring Apprentice", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DaringApprentice;
