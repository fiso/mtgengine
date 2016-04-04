"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuickeningLicid extends Card {
  constructor(game) {
    super(game, "Quickening Licid", "Tempest", "TMP");
  }
}

module.exports = QuickeningLicid;
