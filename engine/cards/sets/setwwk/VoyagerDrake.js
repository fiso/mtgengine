"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoyagerDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Voyager Drake", "Worldwake", "WWK");
  }
}

module.exports = VoyagerDrake;
