"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyrotechnicsBase = require("../setATH/Pyrotechnics.js");

class Pyrotechnics extends PyrotechnicsBase {
  constructor(game) {
    super(game, "Pyrotechnics", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Pyrotechnics;
