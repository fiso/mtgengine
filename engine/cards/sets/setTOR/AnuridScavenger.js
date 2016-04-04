"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnuridScavenger extends Card {
  constructor(game) {
    super(game, "Anurid Scavenger", "Torment", "TOR");
  }
}

module.exports = AnuridScavenger;
