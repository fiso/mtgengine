"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialRecruiter extends UnimplementedCard {
  constructor(game) {
    super(game, "Imperial Recruiter", "Judge Gift Program", "pJGP");
  }
}

module.exports = ImperialRecruiter;
