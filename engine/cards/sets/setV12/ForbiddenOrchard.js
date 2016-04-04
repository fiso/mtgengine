"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForbiddenOrchardBase = require("../setCHK/ForbiddenOrchard.js");

class ForbiddenOrchard extends ForbiddenOrchardBase {
  constructor(game) {
    super(game, "Forbidden Orchard", "From the Vault: Realms", "V12");
  }
}

module.exports = ForbiddenOrchard;
