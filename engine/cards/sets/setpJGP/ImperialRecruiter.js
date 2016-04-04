"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImperialRecruiter extends Card {
  constructor(game) {
    super(game, "Imperial Recruiter", "Judge Gift Program", "pJGP");
  }
}

module.exports = ImperialRecruiter;
