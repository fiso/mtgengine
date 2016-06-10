"use strict";
const Constants = require ("../../../Constants");
const ForbiddenOrchardBase = require("../setCHK/ForbiddenOrchard");

class ForbiddenOrchard extends ForbiddenOrchardBase {
  constructor (game) {
    super(game, "Forbidden Orchard", "From the Vault: Realms", "V12");
  }
}

module.exports = ForbiddenOrchard;
