"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlaringRecruiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Blaring Recruiter", "Battlebond Promos", "PBBD");
  }
}

module.exports = BlaringRecruiter;
