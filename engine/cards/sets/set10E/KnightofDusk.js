"use strict";
const Constants = require ("../../../Constants");
const KnightofDuskBase = require("../setTMP/KnightofDusk");

class KnightofDusk extends KnightofDuskBase {
  constructor(game) {
    super(game, "Knight of Dusk", "Tenth Edition", "10E");
  }
}

module.exports = KnightofDusk;
