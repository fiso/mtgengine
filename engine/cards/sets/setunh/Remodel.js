"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Remodel extends Card {
  constructor(game) {
    super(game, "Remodel", "Unhinged", "UNH");
  }
}

module.exports = Remodel;
