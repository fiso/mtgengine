"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PithDriller extends Card {
  constructor(game) {
    super(game, "Pith Driller", "New Phyrexia", "NPH");
  }
}

module.exports = PithDriller;
