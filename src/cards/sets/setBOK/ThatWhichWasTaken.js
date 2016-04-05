"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThatWhichWasTaken extends UnimplementedCard {
  constructor(game) {
    super(game, "That Which Was Taken", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ThatWhichWasTaken;
