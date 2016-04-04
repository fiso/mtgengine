"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerohsFaithful extends Card {
  constructor(game) {
    super(game, "Teroh's Faithful", "Torment", "TOR");
  }
}

module.exports = TerohsFaithful;
