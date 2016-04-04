"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Togglodyte extends Card {
  constructor(game) {
    super(game, "Togglodyte", "Unhinged", "UNH");
  }
}

module.exports = Togglodyte;
