"use strict";
const Constants = require ("../../../Constants");
const MerfolkMesmeristBase = require("../setM12/MerfolkMesmerist");

class MerfolkMesmerist extends MerfolkMesmeristBase {
  constructor (game) {
    super(game, "Merfolk Mesmerist", "URL/Convention Promos", "PURL");
  }
}

module.exports = MerfolkMesmerist;
