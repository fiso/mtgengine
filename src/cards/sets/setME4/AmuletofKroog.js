"use strict";
const Constants = require ("../../../Constants");
const AmuletofKroogBase = require("../setATQ/AmuletofKroog");

class AmuletofKroog extends AmuletofKroogBase {
  constructor (game) {
    super(game, "Amulet of Kroog", "Masters Edition IV", "ME4");
  }
}

module.exports = AmuletofKroog;
