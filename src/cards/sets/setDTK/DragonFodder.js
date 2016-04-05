"use strict";
const Constants = require ("../../../Constants");
const DragonFodderBase = require("../setARC/DragonFodder");

class DragonFodder extends DragonFodderBase {
  constructor(game) {
    super(game, "Dragon Fodder", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonFodder;
