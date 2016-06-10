"use strict";
const Constants = require ("../../../Constants");
const TrumpetBlastBase = require("../setKTK/TrumpetBlast");

class TrumpetBlast extends TrumpetBlastBase {
  constructor (game) {
    super(game, "Trumpet Blast", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TrumpetBlast;
