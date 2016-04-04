"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClickslitherBase = require("../setDD3_EVG/Clickslither.js");

class Clickslither extends ClickslitherBase {
  constructor(game) {
    super(game, "Clickslither", "Vintage Masters", "VMA");
  }
}

module.exports = Clickslither;
