"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VitalSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Vital Splicer", "Modern Masters 2017", "MM3");
  }
}

module.exports = VitalSplicer;
