"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreepingRenaissance extends UnimplementedCard {
  constructor (game) {
    super(game, "Creeping Renaissance", "Commander 2018", "C18");
  }
}

module.exports = CreepingRenaissance;
