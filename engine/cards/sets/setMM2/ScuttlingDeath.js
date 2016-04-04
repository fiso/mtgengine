"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScuttlingDeathBase = require("../setCHK/ScuttlingDeath.js");

class ScuttlingDeath extends ScuttlingDeathBase {
  constructor(game) {
    super(game, "Scuttling Death", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ScuttlingDeath;
