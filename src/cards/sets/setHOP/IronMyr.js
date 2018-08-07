"use strict";
const Constants = require ("../../../Constants");
const IronMyrBase = require("../setSOM/IronMyr");

class IronMyr extends IronMyrBase {
  constructor (game) {
    super(game, "Iron Myr", "Planechase", "HOP");
  }
}

module.exports = IronMyr;
