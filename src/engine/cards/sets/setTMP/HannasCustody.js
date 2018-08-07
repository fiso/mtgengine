"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HannasCustody extends UnimplementedCard {
  constructor (game) {
    super(game, "Hanna's Custody", "Tempest", "TMP");
  }
}

module.exports = HannasCustody;
