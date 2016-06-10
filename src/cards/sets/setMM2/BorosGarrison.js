"use strict";
const Constants = require ("../../../Constants");
const BorosGarrisonBase = require("../setC13/BorosGarrison");

class BorosGarrison extends BorosGarrisonBase {
  constructor (game) {
    super(game, "Boros Garrison", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BorosGarrison;
