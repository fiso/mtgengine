"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeechingLicid extends UnimplementedCard {
  constructor(game) {
    super(game, "Leeching Licid", "Tempest", "TMP");
  }
}

module.exports = LeechingLicid;
