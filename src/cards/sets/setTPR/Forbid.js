"use strict";
const Constants = require ("../../../Constants");
const ForbidBase = require("../setEXO/Forbid");

class Forbid extends ForbidBase {
  constructor (game) {
    super(game, "Forbid", "Tempest Remastered", "TPR");
  }
}

module.exports = Forbid;
