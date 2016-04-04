"use strict";
const Constants = require ("../../../Constants");
const GuardianZendikonBase = require("../setCNS/GuardianZendikon");

class GuardianZendikon extends GuardianZendikonBase {
  constructor(game) {
    super(game, "Guardian Zendikon", "Worldwake", "WWK");
  }
}

module.exports = GuardianZendikon;
