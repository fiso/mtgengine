"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wordmail extends Card {
  constructor(game) {
    super(game, "Wordmail", "Unhinged", "UNH");
  }
}

module.exports = Wordmail;
