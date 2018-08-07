"use strict";
const Constants = require ("../../../Constants");
const DragonWhelpBase = require("../setCMA/DragonWhelp");

class DragonWhelp extends DragonWhelpBase {
  constructor (game) {
    super(game, "Dragon Whelp", "Unlimited Edition", "2ED");
  }
}

module.exports = DragonWhelp;
