"use strict";
const Constants = require ("../../../Constants");
const BriberyBase = require("../setJ13/Bribery");

class Bribery extends BriberyBase {
  constructor (game) {
    super(game, "Bribery", "Magic Online Promos", "PRM");
  }
}

module.exports = Bribery;
