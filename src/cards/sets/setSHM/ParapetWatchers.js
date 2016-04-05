"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParapetWatchers extends UnimplementedCard {
  constructor(game) {
    super(game, "Parapet Watchers", "Shadowmoor", "SHM");
  }
}

module.exports = ParapetWatchers;
