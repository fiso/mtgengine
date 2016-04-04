"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IsolationZone extends Card {
  constructor(game) {
    super(game, "Isolation Zone", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = IsolationZone;
