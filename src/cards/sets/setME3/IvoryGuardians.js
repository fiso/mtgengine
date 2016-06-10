"use strict";
const Constants = require ("../../../Constants");
const IvoryGuardiansBase = require("../setCHR/IvoryGuardians");

class IvoryGuardians extends IvoryGuardiansBase {
  constructor (game) {
    super(game, "Ivory Guardians", "Masters Edition III", "ME3");
  }
}

module.exports = IvoryGuardians;
