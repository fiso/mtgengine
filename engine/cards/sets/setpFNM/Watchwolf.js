"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WatchwolfBase = require("../setARC/Watchwolf.js");

class Watchwolf extends WatchwolfBase {
  constructor(game) {
    super(game, "Watchwolf", "Friday Night Magic", "pFNM");
  }
}

module.exports = Watchwolf;
