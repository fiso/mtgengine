"use strict";
const Constants = require ("../../../Constants");
const MagicalHackBase = require("../set5ED/MagicalHack");

class MagicalHack extends MagicalHackBase {
  constructor (game) {
    super(game, "Magical Hack", "Fourth Edition", "4ED");
  }
}

module.exports = MagicalHack;
