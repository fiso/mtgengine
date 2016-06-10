"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptingLicid extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrupting Licid", "Stronghold", "STH");
  }
}

module.exports = CorruptingLicid;
