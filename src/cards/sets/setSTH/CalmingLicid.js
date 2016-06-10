"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalmingLicid extends UnimplementedCard {
  constructor (game) {
    super(game, "Calming Licid", "Stronghold", "STH");
  }
}

module.exports = CalmingLicid;
