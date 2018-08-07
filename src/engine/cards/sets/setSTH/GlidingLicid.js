"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlidingLicid extends UnimplementedCard {
  constructor (game) {
    super(game, "Gliding Licid", "Stronghold", "STH");
  }
}

module.exports = GlidingLicid;
