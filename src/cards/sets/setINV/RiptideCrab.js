"use strict";
const Constants = require ("../../../Constants");
const RiptideCrabBase = require("../setBBD/RiptideCrab");

class RiptideCrab extends RiptideCrabBase {
  constructor (game) {
    super(game, "Riptide Crab", "Invasion", "INV");
  }
}

module.exports = RiptideCrab;
