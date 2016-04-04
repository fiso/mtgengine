"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PatagiaGolemBase = require("../set6ED/PatagiaGolem.js");

class PatagiaGolem extends PatagiaGolemBase {
  constructor(game) {
    super(game, "Patagia Golem", "Eighth Edition", "8ED");
  }
}

module.exports = PatagiaGolem;
