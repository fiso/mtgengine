"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuickeningLicid extends UnimplementedCard {
  constructor(game) {
    super(game, "Quickening Licid", "Tempest", "TMP");
  }
}

module.exports = QuickeningLicid;
