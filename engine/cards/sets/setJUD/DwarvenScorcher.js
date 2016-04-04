"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenScorcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Scorcher", "Judgment", "JUD");
  }
}

module.exports = DwarvenScorcher;
