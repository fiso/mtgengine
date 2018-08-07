"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whiteout extends UnimplementedCard {
  constructor (game) {
    super(game, "Whiteout", "Masters Edition II", "ME2");
  }
}

module.exports = Whiteout;
