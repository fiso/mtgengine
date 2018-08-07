"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltoArms extends UnimplementedCard {
  constructor (game) {
    super(game, "Call to Arms", "Masters Edition III", "ME3");
  }
}

module.exports = CalltoArms;
