"use strict";
const Constants = require ("../../../Constants");
const MerfolkMesmeristBase = require("../setM12/MerfolkMesmerist");

class MerfolkMesmerist extends MerfolkMesmeristBase {
  constructor (game) {
    super(game, "Merfolk Mesmerist", "Media Inserts", "pMEI");
  }
}

module.exports = MerfolkMesmerist;
