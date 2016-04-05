"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreepyDoll extends UnimplementedCard {
  constructor(game) {
    super(game, "Creepy Doll", "Innistrad", "ISD");
  }
}

module.exports = CreepyDoll;
