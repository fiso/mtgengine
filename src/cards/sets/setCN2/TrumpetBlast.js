"use strict";
const Constants = require ("../../../Constants");
const TrumpetBlastBase = require("../setM19/TrumpetBlast");

class TrumpetBlast extends TrumpetBlastBase {
  constructor (game) {
    super(game, "Trumpet Blast", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = TrumpetBlast;
