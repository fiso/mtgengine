"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpringjackPastureBase = require("../setC13/SpringjackPasture.js");

class SpringjackPasture extends SpringjackPastureBase {
  constructor(game) {
    super(game, "Springjack Pasture", "Eventide", "EVE");
  }
}

module.exports = SpringjackPasture;
