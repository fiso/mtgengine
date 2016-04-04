"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExcludeBase = require("../setC14/Exclude.js");

class Exclude extends ExcludeBase {
  constructor(game) {
    super(game, "Exclude", "Invasion", "INV");
  }
}

module.exports = Exclude;
