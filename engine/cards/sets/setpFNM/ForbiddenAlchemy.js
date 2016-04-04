"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForbiddenAlchemyBase = require("../setDDQ/ForbiddenAlchemy.js");

class ForbiddenAlchemy extends ForbiddenAlchemyBase {
  constructor(game) {
    super(game, "Forbidden Alchemy", "Friday Night Magic", "pFNM");
  }
}

module.exports = ForbiddenAlchemy;
