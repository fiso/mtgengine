"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuardianZendikonBase = require("../setCNS/GuardianZendikon.js");

class GuardianZendikon extends GuardianZendikonBase {
  constructor(game) {
    super(game, "Guardian Zendikon", "Worldwake", "WWK");
  }
}

module.exports = GuardianZendikon;
