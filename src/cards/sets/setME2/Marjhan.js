"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Marjhan extends UnimplementedCard {
  constructor (game) {
    super(game, "Marjhan", "Masters Edition II", "ME2");
  }
}

module.exports = Marjhan;
