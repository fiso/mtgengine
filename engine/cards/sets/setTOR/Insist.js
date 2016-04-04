"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Insist extends Card {
  constructor(game) {
    super(game, "Insist", "Torment", "TOR");
  }
}

module.exports = Insist;
