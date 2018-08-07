"use strict";
const Constants = require ("../../../Constants");
const StreetWraithBase = require("../setA25/StreetWraith");

class StreetWraith extends StreetWraithBase {
  constructor (game) {
    super(game, "Street Wraith", "Modern Masters", "MMA");
  }
}

module.exports = StreetWraith;
