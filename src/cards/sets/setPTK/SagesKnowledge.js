"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SagesKnowledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Sage's Knowledge", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = SagesKnowledge;
