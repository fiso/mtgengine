"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrainMaggotBase = require("../setpFNM/BrainMaggot.js");

class BrainMaggot extends BrainMaggotBase {
  constructor(game) {
    super(game, "Brain Maggot", "Journey into Nyx", "JOU");
  }
}

module.exports = BrainMaggot;
