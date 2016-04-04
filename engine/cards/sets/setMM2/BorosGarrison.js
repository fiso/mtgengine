"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosGarrisonBase = require("../setC13/BorosGarrison.js");

class BorosGarrison extends BorosGarrisonBase {
  constructor(game) {
    super(game, "Boros Garrison", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BorosGarrison;
