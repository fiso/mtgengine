"use strict";
const Constants = require ("../../../Constants");
const SwellofCourageBase = require("../setDDF/SwellofCourage");

class SwellofCourage extends SwellofCourageBase {
  constructor(game) {
    super(game, "Swell of Courage", "Morningtide", "MOR");
  }
}

module.exports = SwellofCourage;
