"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ICallontheAncientMagics extends Card {
  constructor(game) {
    super(game, "I Call on the Ancient Magics", "Archenemy", "ARC");
  }
}

module.exports = ICallontheAncientMagics;
