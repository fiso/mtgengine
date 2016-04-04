"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindsDesireBase = require("../setpJGP/MindsDesire.js");

class MindsDesire extends MindsDesireBase {
  constructor(game) {
    super(game, "Mind's Desire", "Vintage Masters", "VMA");
  }
}

module.exports = MindsDesire;
