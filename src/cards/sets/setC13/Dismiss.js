"use strict";
const Constants = require ("../../../Constants");
const DismissBase = require("../setpARL/Dismiss");

class Dismiss extends DismissBase {
  constructor (game) {
    super(game, "Dismiss", "Commander 2013 Edition", "C13");
  }
}

module.exports = Dismiss;
