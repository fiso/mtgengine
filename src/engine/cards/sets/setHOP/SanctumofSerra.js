"use strict";
const Constants = require ("../../../Constants");
const SanctumofSerraBase = require("../setPCA/SanctumofSerra");

class SanctumofSerra extends SanctumofSerraBase {
  constructor (game) {
    super(game, "Sanctum of Serra", "Planechase", "HOP");
  }
}

module.exports = SanctumofSerra;
