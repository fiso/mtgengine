"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CurfewBase = require("../setBRB/Curfew.js");

class Curfew extends CurfewBase {
  constructor(game) {
    super(game, "Curfew", "Urza's Saga", "USG");
  }
}

module.exports = Curfew;
