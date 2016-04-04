"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesertBase = require("../setARN/Desert.js");

class Desert extends DesertBase {
  constructor(game) {
    super(game, "Desert", "Friday Night Magic", "pFNM");
  }
}

module.exports = Desert;
