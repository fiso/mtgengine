"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Whirlwind extends Card {
  constructor(game) {
    super(game, "Whirlwind", "Commander 2014", "C14");
  }
}

module.exports = Whirlwind;
