"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialRecruiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Imperial Recruiter", "Masters 25", "A25");
  }
}

module.exports = ImperialRecruiter;
