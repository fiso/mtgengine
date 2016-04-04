"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousCauseBase = require("../setDD3_DVD/RighteousCause.js");

class RighteousCause extends RighteousCauseBase {
  constructor(game) {
    super(game, "Righteous Cause", "Onslaught", "ONS");
  }
}

module.exports = RighteousCause;
