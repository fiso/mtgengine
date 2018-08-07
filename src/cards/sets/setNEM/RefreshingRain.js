"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RefreshingRain extends UnimplementedCard {
  constructor (game) {
    super(game, "Refreshing Rain", "Nemesis", "NEM");
  }
}

module.exports = RefreshingRain;
