"use strict";
const Constants = require ("../../../Constants");
const MatcaRiotersBase = require("../setCON/MatcaRioters");

class MatcaRioters extends MatcaRiotersBase {
  constructor (game) {
    super(game, "Matca Rioters", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MatcaRioters;
