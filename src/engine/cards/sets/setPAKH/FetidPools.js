"use strict";
const Constants = require ("../../../Constants");
const FetidPoolsBase = require("../setAKH/FetidPools");

class FetidPools extends FetidPoolsBase {
  constructor (game) {
    super(game, "Fetid Pools", "Amonkhet Promos", "PAKH");
  }
}

module.exports = FetidPools;
