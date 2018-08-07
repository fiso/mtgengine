"use strict";
const Constants = require ("../../../Constants");
const RighteousCauseBase = require("../setCMA/RighteousCause");

class RighteousCause extends RighteousCauseBase {
  constructor (game) {
    super(game, "Righteous Cause", "Onslaught", "ONS");
  }
}

module.exports = RighteousCause;
