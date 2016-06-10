"use strict";
const Constants = require ("../../../Constants");
const PurelaceBase = require("../setCED/Purelace");

class Purelace extends PurelaceBase {
  constructor (game) {
    super(game, "Purelace", "Fourth Edition", "4ED");
  }
}

module.exports = Purelace;
