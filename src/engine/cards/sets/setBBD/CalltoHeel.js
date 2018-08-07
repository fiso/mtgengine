"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltoHeel extends UnimplementedCard {
  constructor (game) {
    super(game, "Call to Heel", "Battlebond", "BBD");
  }
}

module.exports = CalltoHeel;
