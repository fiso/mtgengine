"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExoskeletalArmor extends Card {
  constructor(game) {
    super(game, "Exoskeletal Armor", "Judgment", "JUD");
  }
}

module.exports = ExoskeletalArmor;
