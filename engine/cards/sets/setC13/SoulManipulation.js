"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulManipulationBase = require("../setARB/SoulManipulation.js");

class SoulManipulation extends SoulManipulationBase {
  constructor(game) {
    super(game, "Soul Manipulation", "Commander 2013 Edition", "C13");
  }
}

module.exports = SoulManipulation;
