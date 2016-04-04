"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SymbiosisBase = require("../setBRB/Symbiosis.js");

class Symbiosis extends SymbiosisBase {
  constructor(game) {
    super(game, "Symbiosis", "Urza's Saga", "USG");
  }
}

module.exports = Symbiosis;
