"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ParalyzeBase = require("../setCED/Paralyze.js");

class Paralyze extends ParalyzeBase {
  constructor(game) {
    super(game, "Paralyze", "Masters Edition", "MED");
  }
}

module.exports = Paralyze;
