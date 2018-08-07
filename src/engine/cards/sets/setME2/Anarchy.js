"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anarchy extends UnimplementedCard {
  constructor (game) {
    super(game, "Anarchy", "Masters Edition II", "ME2");
  }
}

module.exports = Anarchy;
