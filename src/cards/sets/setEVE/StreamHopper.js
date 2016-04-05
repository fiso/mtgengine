"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreamHopper extends UnimplementedCard {
  constructor(game) {
    super(game, "Stream Hopper", "Eventide", "EVE");
  }
}

module.exports = StreamHopper;
