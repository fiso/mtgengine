"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FecundityBase = require("../setBRB/Fecundity.js");

class Fecundity extends FecundityBase {
  constructor(game) {
    super(game, "Fecundity", "Commander 2013 Edition", "C13");
  }
}

module.exports = Fecundity;
