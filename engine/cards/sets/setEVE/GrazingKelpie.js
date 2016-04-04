"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrazingKelpie extends Card {
  constructor(game) {
    super(game, "Grazing Kelpie", "Eventide", "EVE");
  }
}

module.exports = GrazingKelpie;
