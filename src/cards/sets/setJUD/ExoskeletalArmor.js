"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExoskeletalArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Exoskeletal Armor", "Judgment", "JUD");
  }
}

module.exports = ExoskeletalArmor;
