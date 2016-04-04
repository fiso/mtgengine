"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NicolBolasPlaneswalkerBase = require("../setCON/NicolBolasPlaneswalker.js");

class NicolBolasPlaneswalker extends NicolBolasPlaneswalkerBase {
  constructor(game) {
    super(game, "Nicol Bolas, Planeswalker", "Magic 2013", "M13");
  }
}

module.exports = NicolBolasPlaneswalker;
