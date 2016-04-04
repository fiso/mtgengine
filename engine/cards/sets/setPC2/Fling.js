"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlingBase = require("../setpARL/Fling.js");

class Fling extends FlingBase {
  constructor(game) {
    super(game, "Fling", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Fling;
