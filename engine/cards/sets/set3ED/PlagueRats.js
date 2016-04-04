"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlagueRatsBase = require("../setCED/PlagueRats.js");

class PlagueRats extends PlagueRatsBase {
  constructor(game) {
    super(game, "Plague Rats", "Revised Edition", "3ED");
  }
}

module.exports = PlagueRats;
