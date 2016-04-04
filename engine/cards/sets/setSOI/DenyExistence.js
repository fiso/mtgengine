"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DenyExistence extends Card {
  constructor(game) {
    super(game, "Deny Existence", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DenyExistence;
