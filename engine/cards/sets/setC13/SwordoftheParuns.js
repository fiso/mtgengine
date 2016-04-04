"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwordoftheParuns extends Card {
  constructor(game) {
    super(game, "Sword of the Paruns", "Commander 2013 Edition", "C13");
  }
}

module.exports = SwordoftheParuns;
