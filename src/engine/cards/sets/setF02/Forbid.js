"use strict";
const Constants = require ("../../../Constants");
const ForbidBase = require("../setMP2/Forbid");

class Forbid extends ForbidBase {
  constructor (game) {
    super(game, "Forbid", "Friday Night Magic 2002", "F02");
  }
}

module.exports = Forbid;
