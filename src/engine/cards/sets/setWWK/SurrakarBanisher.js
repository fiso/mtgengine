"use strict";
const Constants = require ("../../../Constants");
const SurrakarBanisherBase = require("../setDDO/SurrakarBanisher");

class SurrakarBanisher extends SurrakarBanisherBase {
  constructor (game) {
    super(game, "Surrakar Banisher", "Worldwake", "WWK");
  }
}

module.exports = SurrakarBanisher;
