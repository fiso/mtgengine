"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagicalHackBase = require("../setCED/MagicalHack.js");

class MagicalHack extends MagicalHackBase {
  constructor(game) {
    super(game, "Magical Hack", "Fifth Edition", "5ED");
  }
}

module.exports = MagicalHack;
