"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReveredUnicorn extends Card {
  constructor(game) {
    super(game, "Revered Unicorn", "Weatherlight", "WTH");
  }
}

module.exports = ReveredUnicorn;
