"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenRecruiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Recruiter", "Odyssey", "ODY");
  }
}

module.exports = DwarvenRecruiter;
