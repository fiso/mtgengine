"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagebaneArmor extends Card {
  constructor(game) {
    super(game, "Magebane Armor", "Magic 2010", "M10");
  }
}

module.exports = MagebaneArmor;
