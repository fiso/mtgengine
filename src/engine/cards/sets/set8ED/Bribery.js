"use strict";
const Constants = require ("../../../Constants");
const BriberyBase = require("../setJ13/Bribery");

class Bribery extends BriberyBase {
  constructor (game) {
    super(game, "Bribery", "Eighth Edition", "8ED");
  }
}

module.exports = Bribery;
