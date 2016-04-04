"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PincherBeetlesBase = require("../setBRB/PincherBeetles.js");

class PincherBeetles extends PincherBeetlesBase {
  constructor(game) {
    super(game, "Pincher Beetles", "Tenth Edition", "10E");
  }
}

module.exports = PincherBeetles;
