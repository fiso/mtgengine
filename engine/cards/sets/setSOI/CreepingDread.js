"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CreepingDread extends Card {
  constructor(game) {
    super(game, "Creeping Dread", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CreepingDread;
