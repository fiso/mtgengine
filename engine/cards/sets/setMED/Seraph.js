"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeraphBase = require("../set5ED/Seraph.js");

class Seraph extends SeraphBase {
  constructor(game) {
    super(game, "Seraph", "Masters Edition", "MED");
  }
}

module.exports = Seraph;
