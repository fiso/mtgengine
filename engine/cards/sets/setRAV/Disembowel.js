"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Disembowel extends Card {
  constructor(game) {
    super(game, "Disembowel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Disembowel;
