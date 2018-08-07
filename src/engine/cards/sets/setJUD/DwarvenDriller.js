"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenDriller extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Driller", "Judgment", "JUD");
  }
}

module.exports = DwarvenDriller;
