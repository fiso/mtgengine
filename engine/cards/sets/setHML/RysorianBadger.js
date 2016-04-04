"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RysorianBadger extends UnimplementedCard {
  constructor(game) {
    super(game, "Rysorian Badger", "Homelands", "HML");
  }
}

module.exports = RysorianBadger;
