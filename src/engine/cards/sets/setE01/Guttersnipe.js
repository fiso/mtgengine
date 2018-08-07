"use strict";
const Constants = require ("../../../Constants");
const GuttersnipeBase = require("../setM19/Guttersnipe");

class Guttersnipe extends GuttersnipeBase {
  constructor (game) {
    super(game, "Guttersnipe", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Guttersnipe;
