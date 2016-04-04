"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SurrakarBanisherBase = require("../setDDO/SurrakarBanisher.js");

class SurrakarBanisher extends SurrakarBanisherBase {
  constructor(game) {
    super(game, "Surrakar Banisher", "Worldwake", "WWK");
  }
}

module.exports = SurrakarBanisher;
