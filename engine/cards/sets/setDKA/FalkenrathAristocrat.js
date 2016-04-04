"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalkenrathAristocrat extends Card {
  constructor(game) {
    super(game, "Falkenrath Aristocrat", "Dark Ascension", "DKA");
  }
}

module.exports = FalkenrathAristocrat;
