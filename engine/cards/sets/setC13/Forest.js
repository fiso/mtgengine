"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForestBase = require("../setATH/Forest.js");

class Forest extends ForestBase {
  constructor(game) {
    super(game, "Forest", "Commander 2013 Edition", "C13");
  }
}

module.exports = Forest;
