"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NotofThisWorld extends Card {
  constructor(game) {
    super(game, "Not of This World", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NotofThisWorld;
