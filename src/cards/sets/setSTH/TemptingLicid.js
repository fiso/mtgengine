"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemptingLicid extends UnimplementedCard {
  constructor (game) {
    super(game, "Tempting Licid", "Stronghold", "STH");
  }
}

module.exports = TemptingLicid;
