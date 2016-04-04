"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CompulsiveResearch extends Card {
  constructor(game) {
    super(game, "Compulsive Research", "Commander 2014", "C14");
  }
}

module.exports = CompulsiveResearch;
