"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrMindservant extends Card {
  constructor(game) {
    super(game, "Myr Mindservant", "Mirrodin", "MRD");
  }
}

module.exports = MyrMindservant;
