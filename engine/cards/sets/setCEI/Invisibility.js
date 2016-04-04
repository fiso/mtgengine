"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InvisibilityBase = require("../setCED/Invisibility.js");

class Invisibility extends InvisibilityBase {
  constructor(game) {
    super(game, "Invisibility", "International Collector's Edition", "CEI");
  }
}

module.exports = Invisibility;
