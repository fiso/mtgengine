"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorealDruid extends UnimplementedCard {
  constructor(game) {
    super(game, "Boreal Druid", "Coldsnap", "CSP");
  }
}

module.exports = BorealDruid;
