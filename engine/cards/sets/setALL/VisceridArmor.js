"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VisceridArmor extends Card {
  constructor(game) {
    super(game, "Viscerid Armor", "Alliances", "ALL");
  }
}

module.exports = VisceridArmor;
