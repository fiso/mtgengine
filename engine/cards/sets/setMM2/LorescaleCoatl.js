"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LorescaleCoatlBase = require("../setARB/LorescaleCoatl.js");

class LorescaleCoatl extends LorescaleCoatlBase {
  constructor(game) {
    super(game, "Lorescale Coatl", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = LorescaleCoatl;
