"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CathedralofWarBase = require("../setM13/CathedralofWar.js");

class CathedralofWar extends CathedralofWarBase {
  constructor(game) {
    super(game, "Cathedral of War", "Media Inserts", "pMEI");
  }
}

module.exports = CathedralofWar;
