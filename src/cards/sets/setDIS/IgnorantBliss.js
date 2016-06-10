"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgnorantBliss extends UnimplementedCard {
  constructor (game) {
    super(game, "Ignorant Bliss", "Dissension", "DIS");
  }
}

module.exports = IgnorantBliss;
