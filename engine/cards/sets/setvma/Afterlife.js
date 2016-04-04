"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AfterlifeBase = require("../setC14/Afterlife.js");

class Afterlife extends AfterlifeBase {
  constructor(game) {
    super(game, "Afterlife", "Vintage Masters", "VMA");
  }
}

module.exports = Afterlife;
