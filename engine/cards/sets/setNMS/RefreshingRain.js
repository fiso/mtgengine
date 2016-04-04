"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RefreshingRain extends Card {
  constructor(game) {
    super(game, "Refreshing Rain", "Nemesis", "NMS");
  }
}

module.exports = RefreshingRain;
