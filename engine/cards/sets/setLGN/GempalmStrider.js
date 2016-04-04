"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GempalmStriderBase = require("../setDD3_EVG/GempalmStrider.js");

class GempalmStrider extends GempalmStriderBase {
  constructor(game) {
    super(game, "Gempalm Strider", "Legions", "LGN");
  }
}

module.exports = GempalmStrider;
