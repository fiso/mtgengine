"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoartuskLiege extends Card {
  constructor(game) {
    super(game, "Boartusk Liege", "Shadowmoor", "SHM");
  }
}

module.exports = BoartuskLiege;
