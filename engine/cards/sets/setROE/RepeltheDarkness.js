"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RepeltheDarknessBase = require("../setDDP/RepeltheDarkness.js");

class RepeltheDarkness extends RepeltheDarknessBase {
  constructor(game) {
    super(game, "Repel the Darkness", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RepeltheDarkness;
