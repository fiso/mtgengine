"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FyndhornElvesBase = require("../setDKM/FyndhornElves.js");

class FyndhornElves extends FyndhornElvesBase {
  constructor(game) {
    super(game, "Fyndhorn Elves", "Vintage Masters", "VMA");
  }
}

module.exports = FyndhornElves;
