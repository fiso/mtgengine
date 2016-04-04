"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonWhelpBase = require("../setARC/DragonWhelp.js");

class DragonWhelp extends DragonWhelpBase {
  constructor(game) {
    super(game, "Dragon Whelp", "From the Vault: Dragons", "DRB");
  }
}

module.exports = DragonWhelp;
