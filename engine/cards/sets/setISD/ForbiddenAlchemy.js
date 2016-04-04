"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForbiddenAlchemyBase = require("../setDDQ/ForbiddenAlchemy.js");

class ForbiddenAlchemy extends ForbiddenAlchemyBase {
  constructor(game) {
    super(game, "Forbidden Alchemy", "Innistrad", "ISD");
  }
}

module.exports = ForbiddenAlchemy;
