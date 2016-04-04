"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Incoming extends Card {
  constructor(game) {
    super(game, "Incoming!", "Unglued", "UGL");
  }
}

module.exports = Incoming;
