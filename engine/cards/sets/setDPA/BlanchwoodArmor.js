"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlanchwoodArmor extends Card {
  constructor(game) {
    super(game, "Blanchwood Armor", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = BlanchwoodArmor;
