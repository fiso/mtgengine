"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThinkTwice extends Card {
  constructor(game) {
    super(game, "Think Twice", "Innistrad", "ISD");
  }
}

module.exports = ThinkTwice;
