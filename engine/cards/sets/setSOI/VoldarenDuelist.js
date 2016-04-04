"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoldarenDuelist extends Card {
  constructor(game) {
    super(game, "Voldaren Duelist", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VoldarenDuelist;
