"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuskwatchRecruiter extends Card {
  constructor(game) {
    super(game, "Duskwatch Recruiter", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DuskwatchRecruiter;
