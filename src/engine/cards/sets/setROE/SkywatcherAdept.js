"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkywatcherAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Skywatcher Adept", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SkywatcherAdept;
