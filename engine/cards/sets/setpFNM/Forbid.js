"use strict";
const Constants = require ("../../../Constants");
const ForbidBase = require("../setEXO/Forbid");

class Forbid extends ForbidBase {
  constructor(game) {
    super(game, "Forbid", "Friday Night Magic", "pFNM");
  }
}

module.exports = Forbid;
