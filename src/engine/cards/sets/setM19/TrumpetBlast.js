"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrumpetBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Trumpet Blast", "Core Set 2019", "M19");
  }
}

module.exports = TrumpetBlast;
