"use strict";
const Constants = require ("../../../Constants");
const ParalyzeBase = require("../setCED/Paralyze");

class Paralyze extends ParalyzeBase {
  constructor (game) {
    super(game, "Paralyze", "Unlimited Edition", "2ED");
  }
}

module.exports = Paralyze;
