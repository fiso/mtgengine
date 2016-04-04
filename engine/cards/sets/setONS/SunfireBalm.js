"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunfireBalm extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunfire Balm", "Onslaught", "ONS");
  }
}

module.exports = SunfireBalm;
