"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AcademyRuinsBase = require("../setMMA/AcademyRuins.js");

class AcademyRuins extends AcademyRuinsBase {
  constructor(game) {
    super(game, "Academy Ruins", "Time Spiral", "TSP");
  }
}

module.exports = AcademyRuins;
