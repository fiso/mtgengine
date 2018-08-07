"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skullwinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Skullwinder", "Commander Anthology", "CMA");
  }
}

module.exports = Skullwinder;
