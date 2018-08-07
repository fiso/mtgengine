"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathNoble extends UnimplementedCard {
  constructor (game) {
    super(game, "Falkenrath Noble", "Commander 2017", "C17");
  }
}

module.exports = FalkenrathNoble;
