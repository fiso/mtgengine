"use strict";
const Constants = require ("../../../Constants");
const ImperialRecruiterBase = require("../setpJGP/ImperialRecruiter");

class ImperialRecruiter extends ImperialRecruiterBase {
  constructor (game) {
    super(game, "Imperial Recruiter", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ImperialRecruiter;
