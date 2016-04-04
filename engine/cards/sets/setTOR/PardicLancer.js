"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PardicLancer extends Card {
  constructor(game) {
    super(game, "Pardic Lancer", "Torment", "TOR");
  }
}

module.exports = PardicLancer;
