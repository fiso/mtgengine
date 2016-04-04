"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NiveousWisps extends Card {
  constructor(game) {
    super(game, "Niveous Wisps", "Shadowmoor", "SHM");
  }
}

module.exports = NiveousWisps;
