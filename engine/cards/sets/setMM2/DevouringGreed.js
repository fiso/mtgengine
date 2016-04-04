"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DevouringGreedBase = require("../setCHK/DevouringGreed.js");

class DevouringGreed extends DevouringGreedBase {
  constructor(game) {
    super(game, "Devouring Greed", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DevouringGreed;
