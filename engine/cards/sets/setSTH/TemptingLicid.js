"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemptingLicid extends Card {
  constructor(game) {
    super(game, "Tempting Licid", "Stronghold", "STH");
  }
}

module.exports = TemptingLicid;
