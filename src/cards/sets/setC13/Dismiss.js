"use strict";
const Constants = require ("../../../Constants");
const DismissBase = require("../setCN2/Dismiss");

class Dismiss extends DismissBase {
  constructor (game) {
    super(game, "Dismiss", "Commander 2013", "C13");
  }
}

module.exports = Dismiss;
