"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StartFinish extends UnimplementedCard {
  constructor (game) {
    super(game, "Start // Finish", "Amonkhet", "AKH");
  }
}

module.exports = StartFinish;
