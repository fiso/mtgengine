"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NatureShieldsItsOwn extends Card {
  constructor(game) {
    super(game, "Nature Shields Its Own", "Archenemy", "ARC");
  }
}

module.exports = NatureShieldsItsOwn;
