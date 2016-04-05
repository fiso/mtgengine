"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SensorSplicer extends UnimplementedCard {
  constructor(game) {
    super(game, "Sensor Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = SensorSplicer;
