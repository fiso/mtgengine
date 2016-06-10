"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalkenrathAristocrat extends UnimplementedCard {
  constructor (game) {
    super(game, "Falkenrath Aristocrat", "Dark Ascension", "DKA");
  }
}

module.exports = FalkenrathAristocrat;
