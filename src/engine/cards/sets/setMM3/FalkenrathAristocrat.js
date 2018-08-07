"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathAristocrat extends UnimplementedCard {
  constructor (game) {
    super(game, "Falkenrath Aristocrat", "Modern Masters 2017", "MM3");
  }
}

module.exports = FalkenrathAristocrat;
