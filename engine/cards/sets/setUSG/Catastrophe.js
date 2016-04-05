"use strict";
const Constants = require ("../../../Constants");
const CatastropheBase = require("../setBRB/Catastrophe");

class Catastrophe extends CatastropheBase {
  constructor(game) {
    super(game, "Catastrophe", "Urza's Saga", "USG");
  }
}

module.exports = Catastrophe;
