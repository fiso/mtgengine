"use strict";
const Constants = require ("../../../Constants");
const PatagiaGolemBase = require("../set6ED/PatagiaGolem");

class PatagiaGolem extends PatagiaGolemBase {
  constructor (game) {
    super(game, "Patagia Golem", "Seventh Edition", "7ED");
  }
}

module.exports = PatagiaGolem;
