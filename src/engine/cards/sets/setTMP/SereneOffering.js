"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SereneOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Serene Offering", "Tempest", "TMP");
  }
}

module.exports = SereneOffering;
