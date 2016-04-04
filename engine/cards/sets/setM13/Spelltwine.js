"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpelltwineBase = require("../setDDM/Spelltwine.js");

class Spelltwine extends SpelltwineBase {
  constructor(game) {
    super(game, "Spelltwine", "Magic 2013", "M13");
  }
}

module.exports = Spelltwine;
