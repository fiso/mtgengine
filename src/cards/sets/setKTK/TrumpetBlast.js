"use strict";
const Constants = require ("../../../Constants");
const TrumpetBlastBase = require("../setM19/TrumpetBlast");

class TrumpetBlast extends TrumpetBlastBase {
  constructor (game) {
    super(game, "Trumpet Blast", "Khans of Tarkir", "KTK");
  }
}

module.exports = TrumpetBlast;
