"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZoeticCavernBase = require("../setC14/ZoeticCavern.js");

class ZoeticCavern extends ZoeticCavernBase {
  constructor(game) {
    super(game, "Zoetic Cavern", "Commander 2015", "C15");
  }
}

module.exports = ZoeticCavern;
