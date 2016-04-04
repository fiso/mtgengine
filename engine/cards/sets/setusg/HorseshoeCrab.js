"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HorseshoeCrabBase = require("../set10E/HorseshoeCrab.js");

class HorseshoeCrab extends HorseshoeCrabBase {
  constructor(game) {
    super(game, "Horseshoe Crab", "Urza's Saga", "USG");
  }
}

module.exports = HorseshoeCrab;
