"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ambiguity extends Card {
  constructor(game) {
    super(game, "Ambiguity", "Unhinged", "UNH");
  }
}

module.exports = Ambiguity;
