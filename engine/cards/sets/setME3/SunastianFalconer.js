"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunastianFalconerBase = require("../setLEG/SunastianFalconer.js");

class SunastianFalconer extends SunastianFalconerBase {
  constructor(game) {
    super(game, "Sunastian Falconer", "Masters Edition III", "ME3");
  }
}

module.exports = SunastianFalconer;
