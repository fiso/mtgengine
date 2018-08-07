"use strict";
const Constants = require ("../../../Constants");
const DragonFodderBase = require("../setMM3/DragonFodder");

class DragonFodder extends DragonFodderBase {
  constructor (game) {
    super(game, "Dragon Fodder", "Shards of Alara", "ALA");
  }
}

module.exports = DragonFodder;
