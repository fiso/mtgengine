"use strict";
const Constants = require ("../../../Constants");
const DismissBase = require("../setCN2/Dismiss");

class Dismiss extends DismissBase {
  constructor (game) {
    super(game, "Dismiss", "Magic Online Promos", "PRM");
  }
}

module.exports = Dismiss;
