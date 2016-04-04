"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcSlogger extends UnimplementedCard {
  constructor(game) {
    super(game, "Arc-Slogger", "Mirrodin", "MRD");
  }
}

module.exports = ArcSlogger;
