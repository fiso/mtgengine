"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecuretheWastes extends Card {
  constructor(game) {
    super(game, "Secure the Wastes", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SecuretheWastes;
