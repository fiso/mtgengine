"use strict";
const Constants = require ("../../../Constants");
const FosterBase = require("../setC13/Foster");

class Foster extends FosterBase {
  constructor(game) {
    super(game, "Foster", "Mercadian Masques", "MMQ");
  }
}

module.exports = Foster;
