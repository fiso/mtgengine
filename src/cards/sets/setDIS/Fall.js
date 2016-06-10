"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fall extends UnimplementedCard {
  constructor (game) {
    super(game, "Fall", "Dissension", "DIS");
  }
}

module.exports = Fall;
