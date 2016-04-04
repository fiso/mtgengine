"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OvinomancerBase = require("../setMGB/Ovinomancer.js");

class Ovinomancer extends OvinomancerBase {
  constructor(game) {
    super(game, "Ovinomancer", "Visions", "VIS");
  }
}

module.exports = Ovinomancer;
