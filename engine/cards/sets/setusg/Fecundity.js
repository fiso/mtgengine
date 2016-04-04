"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FecundityBase = require("../setBRB/Fecundity.js");

class Fecundity extends FecundityBase {
  constructor(game) {
    super(game, "Fecundity", "Urza's Saga", "USG");
  }
}

module.exports = Fecundity;
