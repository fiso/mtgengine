"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MatcaRiotersBase = require("../setCON/MatcaRioters.js");

class MatcaRioters extends MatcaRiotersBase {
  constructor(game) {
    super(game, "Matca Rioters", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MatcaRioters;
