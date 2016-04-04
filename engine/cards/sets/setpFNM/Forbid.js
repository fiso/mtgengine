"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForbidBase = require("../setEXO/Forbid.js");

class Forbid extends ForbidBase {
  constructor(game) {
    super(game, "Forbid", "Friday Night Magic", "pFNM");
  }
}

module.exports = Forbid;
