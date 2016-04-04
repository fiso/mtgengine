"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyrotechnicsBase = require("../setATH/Pyrotechnics.js");

class Pyrotechnics extends PyrotechnicsBase {
  constructor(game) {
    super(game, "Pyrotechnics", "Fourth Edition", "4ED");
  }
}

module.exports = Pyrotechnics;
