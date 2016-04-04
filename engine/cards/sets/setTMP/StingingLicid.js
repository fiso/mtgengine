"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StingingLicid extends Card {
  constructor(game) {
    super(game, "Stinging Licid", "Tempest", "TMP");
  }
}

module.exports = StingingLicid;
