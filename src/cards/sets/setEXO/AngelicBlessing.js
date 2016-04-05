"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Angelic Blessing", "Exodus", "EXO");
  }
}

module.exports = AngelicBlessing;
