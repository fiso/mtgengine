"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScablandBase = require("../setTMP/Scabland.js");

class Scabland extends ScablandBase {
  constructor(game) {
    super(game, "Scabland", "Vintage Masters", "VMA");
  }
}

module.exports = Scabland;
