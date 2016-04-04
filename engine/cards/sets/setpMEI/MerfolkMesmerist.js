"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerfolkMesmeristBase = require("../setM12/MerfolkMesmerist.js");

class MerfolkMesmerist extends MerfolkMesmeristBase {
  constructor(game) {
    super(game, "Merfolk Mesmerist", "Media Inserts", "pMEI");
  }
}

module.exports = MerfolkMesmerist;
