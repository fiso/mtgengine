"use strict";
const Constants = require ("../../../Constants");
const RatsFeastBase = require("../setPHUK/RatsFeast");

class RatsFeast extends RatsFeastBase {
  constructor (game) {
    super(game, "Rats' Feast", "Judgment", "JUD");
  }
}

module.exports = RatsFeast;
