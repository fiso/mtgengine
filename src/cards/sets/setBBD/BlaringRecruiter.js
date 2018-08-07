"use strict";
const Constants = require ("../../../Constants");
const BlaringRecruiterBase = require("../setPBBD/BlaringRecruiter");

class BlaringRecruiter extends BlaringRecruiterBase {
  constructor (game) {
    super(game, "Blaring Recruiter", "Battlebond", "BBD");
  }
}

module.exports = BlaringRecruiter;
