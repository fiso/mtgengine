"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BudokaPupilBase = require("../setBOK/BudokaPupil.js");

class BudokaPupil extends BudokaPupilBase {
  constructor(game) {
    super(game, "Budoka Pupil", "Release Events", "pREL");
  }
}

module.exports = BudokaPupil;
