"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScribNibblers extends Card {
  constructor(game) {
    super(game, "Scrib Nibblers", "Worldwake", "WWK");
  }
}

module.exports = ScribNibblers;
