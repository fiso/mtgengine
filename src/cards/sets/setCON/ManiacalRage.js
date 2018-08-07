"use strict";
const Constants = require ("../../../Constants");
const ManiacalRageBase = require("../setTPR/ManiacalRage");

class ManiacalRage extends ManiacalRageBase {
  constructor (game) {
    super(game, "Maniacal Rage", "Conflux", "CON");
  }
}

module.exports = ManiacalRage;
