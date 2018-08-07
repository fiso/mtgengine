"use strict";
const Constants = require ("../../../Constants");
const AcademyatTolariaWestBase = require("../setPCA/AcademyatTolariaWest");

class AcademyatTolariaWest extends AcademyatTolariaWestBase {
  constructor (game) {
    super(game, "Academy at Tolaria West", "Planechase", "HOP");
  }
}

module.exports = AcademyatTolariaWest;
