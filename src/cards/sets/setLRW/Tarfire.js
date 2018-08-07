"use strict";
const Constants = require ("../../../Constants");
const TarfireBase = require("../setDDT/Tarfire");

class Tarfire extends TarfireBase {
  constructor (game) {
    super(game, "Tarfire", "Lorwyn", "LRW");
  }
}

module.exports = Tarfire;
