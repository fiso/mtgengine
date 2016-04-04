"use strict";
const Constants = require ("../../../Constants");
const DragonFodderBase = require("../setARC/DragonFodder");

class DragonFodder extends DragonFodderBase {
  constructor(game) {
    super(game, "Dragon Fodder", "Magic Origins", "ORI");
  }
}

module.exports = DragonFodder;
