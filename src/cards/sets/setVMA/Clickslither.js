"use strict";
const Constants = require ("../../../Constants");
const ClickslitherBase = require("../setEVG/Clickslither");

class Clickslither extends ClickslitherBase {
  constructor (game) {
    super(game, "Clickslither", "Vintage Masters", "VMA");
  }
}

module.exports = Clickslither;
