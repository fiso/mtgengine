"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreamingSeahawk extends UnimplementedCard {
  constructor (game) {
    super(game, "Screaming Seahawk", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ScreamingSeahawk;
