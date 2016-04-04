"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PardicArsonist extends Card {
  constructor(game) {
    super(game, "Pardic Arsonist", "Torment", "TOR");
  }
}

module.exports = PardicArsonist;
