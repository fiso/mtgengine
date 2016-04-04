"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwellofCourageBase = require("../setDDF/SwellofCourage.js");

class SwellofCourage extends SwellofCourageBase {
  constructor(game) {
    super(game, "Swell of Courage", "Morningtide", "MOR");
  }
}

module.exports = SwellofCourage;
