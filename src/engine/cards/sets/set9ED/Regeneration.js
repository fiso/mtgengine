"use strict";
const Constants = require ("../../../Constants");
const RegenerationBase = require("../set10E/Regeneration");

class Regeneration extends RegenerationBase {
  constructor (game) {
    super(game, "Regeneration", "Ninth Edition", "9ED");
  }
}

module.exports = Regeneration;
