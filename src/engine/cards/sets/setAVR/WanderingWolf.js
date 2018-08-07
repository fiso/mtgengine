"use strict";
const Constants = require ("../../../Constants");
const WanderingWolfBase = require("../setBBD/WanderingWolf");

class WanderingWolf extends WanderingWolfBase {
  constructor (game) {
    super(game, "Wandering Wolf", "Avacyn Restored", "AVR");
  }
}

module.exports = WanderingWolf;
