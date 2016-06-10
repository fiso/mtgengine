"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuskwatchRecruiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Duskwatch Recruiter", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DuskwatchRecruiter;
