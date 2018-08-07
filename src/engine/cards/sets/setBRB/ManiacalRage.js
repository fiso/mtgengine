"use strict";
const Constants = require ("../../../Constants");
const ManiacalRageBase = require("../setTPR/ManiacalRage");

class ManiacalRage extends ManiacalRageBase {
  constructor (game) {
    super(game, "Maniacal Rage", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ManiacalRage;
