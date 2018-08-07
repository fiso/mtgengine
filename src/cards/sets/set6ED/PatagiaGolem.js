"use strict";
const Constants = require ("../../../Constants");
const PatagiaGolemBase = require("../set8ED/PatagiaGolem");

class PatagiaGolem extends PatagiaGolemBase {
  constructor (game) {
    super(game, "Patagia Golem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PatagiaGolem;
