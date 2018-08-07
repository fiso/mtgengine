"use strict";
const Constants = require ("../../../Constants");
const ForbiddenAlchemyBase = require("../setMM3/ForbiddenAlchemy");

class ForbiddenAlchemy extends ForbiddenAlchemyBase {
  constructor (game) {
    super(game, "Forbidden Alchemy", "Friday Night Magic 2012", "F12");
  }
}

module.exports = ForbiddenAlchemy;
