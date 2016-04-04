"use strict";
const Constants = require ("../../../Constants");
const BriberyBase = require("../set8ED/Bribery");

class Bribery extends BriberyBase {
  constructor(game) {
    super(game, "Bribery", "Mercadian Masques", "MMQ");
  }
}

module.exports = Bribery;
