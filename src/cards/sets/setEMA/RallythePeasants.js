"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RallythePeasants extends UnimplementedCard {
  constructor (game) {
    super(game, "Rally the Peasants", "Eternal Masters", "EMA");
  }
}

module.exports = RallythePeasants;
