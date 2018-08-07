"use strict";
const Constants = require ("../../../Constants");
const CoffinPurgeBase = require("../setWC02/CoffinPurge");

class CoffinPurge extends CoffinPurgeBase {
  constructor (game) {
    super(game, "Coffin Purge", "Odyssey", "ODY");
  }
}

module.exports = CoffinPurge;
