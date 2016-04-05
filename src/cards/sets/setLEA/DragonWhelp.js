"use strict";
const Constants = require ("../../../Constants");
const DragonWhelpBase = require("../setARC/DragonWhelp");

class DragonWhelp extends DragonWhelpBase {
  constructor(game) {
    super(game, "Dragon Whelp", "Limited Edition Alpha", "LEA");
  }
}

module.exports = DragonWhelp;
