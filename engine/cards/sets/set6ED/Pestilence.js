"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PestilenceBase = require("../setBRB/Pestilence.js");

class Pestilence extends PestilenceBase {
  constructor(game) {
    super(game, "Pestilence", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Pestilence;
