"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeaknessBase = require("../setBRB/Weakness.js");

class Weakness extends WeaknessBase {
  constructor(game) {
    super(game, "Weakness", "Fourth Edition", "4ED");
  }
}

module.exports = Weakness;
