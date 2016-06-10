"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreepingRenaissance extends UnimplementedCard {
  constructor (game) {
    super(game, "Creeping Renaissance", "Innistrad", "ISD");
  }
}

module.exports = CreepingRenaissance;
