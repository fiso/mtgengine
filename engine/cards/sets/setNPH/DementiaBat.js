"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DementiaBat extends Card {
  constructor(game) {
    super(game, "Dementia Bat", "New Phyrexia", "NPH");
  }
}

module.exports = DementiaBat;
