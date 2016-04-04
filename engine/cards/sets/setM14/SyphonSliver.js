"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SyphonSliver extends Card {
  constructor(game) {
    super(game, "Syphon Sliver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SyphonSliver;
