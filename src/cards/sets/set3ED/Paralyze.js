"use strict";
const Constants = require ("../../../Constants");
const ParalyzeBase = require("../setCED/Paralyze");

class Paralyze extends ParalyzeBase {
  constructor (game) {
    super(game, "Paralyze", "Revised Edition", "3ED");
  }
}

module.exports = Paralyze;
