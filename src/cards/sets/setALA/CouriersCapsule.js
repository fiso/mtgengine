"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CouriersCapsule extends UnimplementedCard {
  constructor(game) {
    super(game, "Courier's Capsule", "Shards of Alara", "ALA");
  }
}

module.exports = CouriersCapsule;
