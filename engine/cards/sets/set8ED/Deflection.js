"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeflectionBase = require("../set6ED/Deflection.js");

class Deflection extends DeflectionBase {
  constructor(game) {
    super(game, "Deflection", "Eighth Edition", "8ED");
  }
}

module.exports = Deflection;
