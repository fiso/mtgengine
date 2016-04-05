"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloudCover extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloud Cover", "Planeshift", "PLS");
  }
}

module.exports = CloudCover;
