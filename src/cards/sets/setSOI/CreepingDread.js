"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreepingDread extends UnimplementedCard {
  constructor(game) {
    super(game, "Creeping Dread", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CreepingDread;
