"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavenFamiliar extends Card {
  constructor(game) {
    super(game, "Raven Familiar", "Commander 2013 Edition", "C13");
  }
}

module.exports = RavenFamiliar;
