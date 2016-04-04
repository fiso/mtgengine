"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulblastBase = require("../setCHK/Soulblast.js");

class Soulblast extends SoulblastBase {
  constructor(game) {
    super(game, "Soulblast", "Tenth Edition", "10E");
  }
}

module.exports = Soulblast;
