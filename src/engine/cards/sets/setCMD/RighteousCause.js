"use strict";
const Constants = require ("../../../Constants");
const RighteousCauseBase = require("../setCMA/RighteousCause");

class RighteousCause extends RighteousCauseBase {
  constructor (game) {
    super(game, "Righteous Cause", "Commander 2011", "CMD");
  }
}

module.exports = RighteousCause;
