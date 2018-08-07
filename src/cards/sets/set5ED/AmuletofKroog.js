"use strict";
const Constants = require ("../../../Constants");
const AmuletofKroogBase = require("../setME4/AmuletofKroog");

class AmuletofKroog extends AmuletofKroogBase {
  constructor (game) {
    super(game, "Amulet of Kroog", "Fifth Edition", "5ED");
  }
}

module.exports = AmuletofKroog;
