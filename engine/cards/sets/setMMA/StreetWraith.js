"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StreetWraithBase = require("../setFUT/StreetWraith.js");

class StreetWraith extends StreetWraithBase {
  constructor(game) {
    super(game, "Street Wraith", "Modern Masters", "MMA");
  }
}

module.exports = StreetWraith;
