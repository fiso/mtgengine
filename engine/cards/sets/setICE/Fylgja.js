"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fylgja extends Card {
  constructor(game) {
    super(game, "Fylgja", "Ice Age", "ICE");
  }
}

module.exports = Fylgja;
