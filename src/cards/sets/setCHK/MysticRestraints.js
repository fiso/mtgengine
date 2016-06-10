"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticRestraints extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Restraints", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MysticRestraints;
