"use strict";
const Constants = require ("../../../Constants");
const ParalyzeBase = require("../setCED/Paralyze");

class Paralyze extends ParalyzeBase {
  constructor(game) {
    super(game, "Paralyze", "Fourth Edition", "4ED");
  }
}

module.exports = Paralyze;
