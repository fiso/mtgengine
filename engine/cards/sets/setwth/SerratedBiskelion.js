"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerratedBiskelionBase = require("../setDDF/SerratedBiskelion.js");

class SerratedBiskelion extends SerratedBiskelionBase {
  constructor(game) {
    super(game, "Serrated Biskelion", "Weatherlight", "WTH");
  }
}

module.exports = SerratedBiskelion;
