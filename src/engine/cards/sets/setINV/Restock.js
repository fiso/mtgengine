"use strict";
const Constants = require ("../../../Constants");
const RestockBase = require("../setM15/Restock");

class Restock extends RestockBase {
  constructor (game) {
    super(game, "Restock", "Invasion", "INV");
  }
}

module.exports = Restock;
