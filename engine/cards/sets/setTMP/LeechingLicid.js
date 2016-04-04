"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeechingLicid extends Card {
  constructor(game) {
    super(game, "Leeching Licid", "Tempest", "TMP");
  }
}

module.exports = LeechingLicid;
