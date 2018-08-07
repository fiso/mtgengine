"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stampede extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampede", "Masters Edition II", "ME2");
  }
}

module.exports = Stampede;
