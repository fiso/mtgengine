"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefyGravity extends UnimplementedCard {
  constructor (game) {
    super(game, "Defy Gravity", "Judgment", "JUD");
  }
}

module.exports = DefyGravity;
