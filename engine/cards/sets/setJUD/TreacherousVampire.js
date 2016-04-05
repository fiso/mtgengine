"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreacherousVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Treacherous Vampire", "Judgment", "JUD");
  }
}

module.exports = TreacherousVampire;
