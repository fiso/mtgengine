"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TouchandGo extends Card {
  constructor(game) {
    super(game, "Touch and Go", "Unhinged", "UNH");
  }
}

module.exports = TouchandGo;
