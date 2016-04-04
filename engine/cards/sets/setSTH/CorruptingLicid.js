"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorruptingLicid extends Card {
  constructor(game) {
    super(game, "Corrupting Licid", "Stronghold", "STH");
  }
}

module.exports = CorruptingLicid;
