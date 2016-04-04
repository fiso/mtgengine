"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterApothecary extends Card {
  constructor(game) {
    super(game, "Master Apothecary", "Odyssey", "ODY");
  }
}

module.exports = MasterApothecary;
