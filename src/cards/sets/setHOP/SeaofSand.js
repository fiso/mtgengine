"use strict";
const Constants = require ("../../../Constants");
const SeaofSandBase = require("../setPCA/SeaofSand");

class SeaofSand extends SeaofSandBase {
  constructor (game) {
    super(game, "Sea of Sand", "Planechase", "HOP");
  }
}

module.exports = SeaofSand;
