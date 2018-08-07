"use strict";
const Constants = require ("../../../Constants");
const ForbidBase = require("../setMP2/Forbid");

class Forbid extends ForbidBase {
  constructor (game) {
    super(game, "Forbid", "Exodus", "EXO");
  }
}

module.exports = Forbid;
