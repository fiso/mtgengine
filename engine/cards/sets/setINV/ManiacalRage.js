"use strict";
const Constants = require ("../../../Constants");
const ManiacalRageBase = require("../setBRB/ManiacalRage");

class ManiacalRage extends ManiacalRageBase {
  constructor(game) {
    super(game, "Maniacal Rage", "Invasion", "INV");
  }
}

module.exports = ManiacalRage;
