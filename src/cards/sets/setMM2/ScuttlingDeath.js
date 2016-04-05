"use strict";
const Constants = require ("../../../Constants");
const ScuttlingDeathBase = require("../setCHK/ScuttlingDeath");

class ScuttlingDeath extends ScuttlingDeathBase {
  constructor(game) {
    super(game, "Scuttling Death", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ScuttlingDeath;
