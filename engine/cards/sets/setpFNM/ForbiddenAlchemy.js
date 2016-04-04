"use strict";
const Constants = require ("../../../Constants");
const ForbiddenAlchemyBase = require("../setDDQ/ForbiddenAlchemy");

class ForbiddenAlchemy extends ForbiddenAlchemyBase {
  constructor(game) {
    super(game, "Forbidden Alchemy", "Friday Night Magic", "pFNM");
  }
}

module.exports = ForbiddenAlchemy;
