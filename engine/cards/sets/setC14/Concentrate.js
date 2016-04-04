"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Concentrate extends Card {
  constructor(game) {
    super(game, "Concentrate", "Commander 2014", "C14");
  }
}

module.exports = Concentrate;
