"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CreepingRenaissance extends Card {
  constructor(game) {
    super(game, "Creeping Renaissance", "Innistrad", "ISD");
  }
}

module.exports = CreepingRenaissance;
