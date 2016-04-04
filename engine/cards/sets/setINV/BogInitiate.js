"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogInitiate extends Card {
  constructor(game) {
    super(game, "Bog Initiate", "Invasion", "INV");
  }
}

module.exports = BogInitiate;
