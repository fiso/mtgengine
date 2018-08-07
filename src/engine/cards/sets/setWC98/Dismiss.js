"use strict";
const Constants = require ("../../../Constants");
const DismissBase = require("../setCN2/Dismiss");

class Dismiss extends DismissBase {
  constructor (game) {
    super(game, "Dismiss", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Dismiss;
