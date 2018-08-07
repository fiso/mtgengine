"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallerofthePack extends UnimplementedCard {
  constructor (game) {
    super(game, "Caller of the Pack", "Commander Anthology", "CMA");
  }
}

module.exports = CallerofthePack;
