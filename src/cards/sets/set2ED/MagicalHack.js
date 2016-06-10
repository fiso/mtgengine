"use strict";
const Constants = require ("../../../Constants");
const MagicalHackBase = require("../setCED/MagicalHack");

class MagicalHack extends MagicalHackBase {
  constructor (game) {
    super(game, "Magical Hack", "Unlimited Edition", "2ED");
  }
}

module.exports = MagicalHack;
