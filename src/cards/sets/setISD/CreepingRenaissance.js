"use strict";
const Constants = require ("../../../Constants");
const CreepingRenaissanceBase = require("../setC18/CreepingRenaissance");

class CreepingRenaissance extends CreepingRenaissanceBase {
  constructor (game) {
    super(game, "Creeping Renaissance", "Innistrad", "ISD");
  }
}

module.exports = CreepingRenaissance;
