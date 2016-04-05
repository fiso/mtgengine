"use strict";
const Constants = require ("../../../Constants");
const AcademyRuinsBase = require("../setMMA/AcademyRuins");

class AcademyRuins extends AcademyRuinsBase {
  constructor(game) {
    super(game, "Academy Ruins", "Time Spiral", "TSP");
  }
}

module.exports = AcademyRuins;
