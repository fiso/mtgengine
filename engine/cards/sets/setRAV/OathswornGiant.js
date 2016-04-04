"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OathswornGiant extends Card {
  constructor(game) {
    super(game, "Oathsworn Giant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = OathswornGiant;
