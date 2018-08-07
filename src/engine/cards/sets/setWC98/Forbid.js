"use strict";
const Constants = require ("../../../Constants");
const ForbidBase = require("../setMP2/Forbid");

class Forbid extends ForbidBase {
  constructor (game) {
    super(game, "Forbid", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Forbid;
