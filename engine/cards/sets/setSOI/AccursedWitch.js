"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AccursedWitch extends Card {
  constructor(game) {
    super(game, "Accursed Witch", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AccursedWitch;
