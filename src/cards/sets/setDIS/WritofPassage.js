"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WritofPassage extends UnimplementedCard {
  constructor (game) {
    super(game, "Writ of Passage", "Dissension", "DIS");
  }
}

module.exports = WritofPassage;
