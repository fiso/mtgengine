"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StingingLicid extends UnimplementedCard {
  constructor (game) {
    super(game, "Stinging Licid", "Tempest", "TMP");
  }
}

module.exports = StingingLicid;
