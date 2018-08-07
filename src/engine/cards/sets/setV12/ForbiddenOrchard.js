"use strict";
const Constants = require ("../../../Constants");
const ForbiddenOrchardBase = require("../setC16/ForbiddenOrchard");

class ForbiddenOrchard extends ForbiddenOrchardBase {
  constructor (game) {
    super(game, "Forbidden Orchard", "From the Vault: Realms", "V12");
  }
}

module.exports = ForbiddenOrchard;
