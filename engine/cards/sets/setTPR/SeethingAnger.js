"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeethingAngerBase = require("../setSTH/SeethingAnger.js");

class SeethingAnger extends SeethingAngerBase {
  constructor(game) {
    super(game, "Seething Anger", "Tempest Remastered", "TPR");
  }
}

module.exports = SeethingAnger;
