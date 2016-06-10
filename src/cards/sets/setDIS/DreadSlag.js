"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadSlag extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Slag", "Dissension", "DIS");
  }
}

module.exports = DreadSlag;
