"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImperialRecruiterBase = require("../setpJGP/ImperialRecruiter.js");

class ImperialRecruiter extends ImperialRecruiterBase {
  constructor(game) {
    super(game, "Imperial Recruiter", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ImperialRecruiter;
