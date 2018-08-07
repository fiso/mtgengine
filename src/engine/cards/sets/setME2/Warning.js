"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Warning extends UnimplementedCard {
  constructor (game) {
    super(game, "Warning", "Masters Edition II", "ME2");
  }
}

module.exports = Warning;
