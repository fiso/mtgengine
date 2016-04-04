"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PestilenceBase = require("../setBRB/Pestilence.js");

class Pestilence extends PestilenceBase {
  constructor(game) {
    super(game, "Pestilence", "Unlimited Edition", "2ED");
  }
}

module.exports = Pestilence;
