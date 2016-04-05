"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingGrounds extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunting Grounds", "Judgment", "JUD");
  }
}

module.exports = HuntingGrounds;
