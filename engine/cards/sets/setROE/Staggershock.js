"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Staggershock extends Card {
  constructor(game) {
    super(game, "Staggershock", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Staggershock;
