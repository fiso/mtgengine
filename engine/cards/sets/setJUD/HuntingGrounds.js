"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntingGrounds extends Card {
  constructor(game) {
    super(game, "Hunting Grounds", "Judgment", "JUD");
  }
}

module.exports = HuntingGrounds;
