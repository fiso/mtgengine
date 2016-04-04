"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlidingLicid extends Card {
  constructor(game) {
    super(game, "Gliding Licid", "Stronghold", "STH");
  }
}

module.exports = GlidingLicid;
