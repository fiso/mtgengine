"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HandofEmrakul extends Card {
  constructor(game) {
    super(game, "Hand of Emrakul", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HandofEmrakul;
