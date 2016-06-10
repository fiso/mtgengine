"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvengingDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Avenging Druid", "Exodus", "EXO");
  }
}

module.exports = AvengingDruid;
