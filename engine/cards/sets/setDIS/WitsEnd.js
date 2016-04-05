"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitsEnd extends UnimplementedCard {
  constructor(game) {
    super(game, "Wit's End", "Dissension", "DIS");
  }
}

module.exports = WitsEnd;
