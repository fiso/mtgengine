"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hypnox extends Card {
  constructor(game) {
    super(game, "Hypnox", "Torment", "TOR");
  }
}

module.exports = Hypnox;
