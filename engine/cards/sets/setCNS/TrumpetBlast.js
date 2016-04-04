"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrumpetBlastBase = require("../setKTK/TrumpetBlast.js");

class TrumpetBlast extends TrumpetBlastBase {
  constructor(game) {
    super(game, "Trumpet Blast", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TrumpetBlast;
