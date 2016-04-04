"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreacherousWerewolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Treacherous Werewolf", "Judgment", "JUD");
  }
}

module.exports = TreacherousWerewolf;
