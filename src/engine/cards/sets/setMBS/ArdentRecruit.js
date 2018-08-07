"use strict";
const Constants = require ("../../../Constants");
const ArdentRecruitBase = require("../setTD2/ArdentRecruit");

class ArdentRecruit extends ArdentRecruitBase {
  constructor (game) {
    super(game, "Ardent Recruit", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ArdentRecruit;
