"use strict";
const Constants = require ("../../../Constants");
const StreetWraithBase = require("../setFUT/StreetWraith");

class StreetWraith extends StreetWraithBase {
  constructor (game) {
    super(game, "Street Wraith", "Modern Masters", "MMA");
  }
}

module.exports = StreetWraith;
