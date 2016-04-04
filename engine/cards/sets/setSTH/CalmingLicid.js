"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalmingLicid extends Card {
  constructor(game) {
    super(game, "Calming Licid", "Stronghold", "STH");
  }
}

module.exports = CalmingLicid;
