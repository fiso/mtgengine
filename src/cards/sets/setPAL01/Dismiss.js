"use strict";
const Constants = require ("../../../Constants");
const DismissBase = require("../setCN2/Dismiss");

class Dismiss extends DismissBase {
  constructor (game) {
    super(game, "Dismiss", "Arena League 2001", "PAL01");
  }
}

module.exports = Dismiss;
