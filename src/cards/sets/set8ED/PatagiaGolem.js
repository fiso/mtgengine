"use strict";
const Constants = require ("../../../Constants");
const PatagiaGolemBase = require("../set6ED/PatagiaGolem");

class PatagiaGolem extends PatagiaGolemBase {
  constructor (game) {
    super(game, "Patagia Golem", "Eighth Edition", "8ED");
  }
}

module.exports = PatagiaGolem;
