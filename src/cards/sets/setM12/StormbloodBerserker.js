"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormbloodBerserker extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormblood Berserker", "Magic 2012", "M12");
  }
}

module.exports = StormbloodBerserker;
