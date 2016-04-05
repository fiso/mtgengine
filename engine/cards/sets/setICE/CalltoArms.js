"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltoArms extends UnimplementedCard {
  constructor(game) {
    super(game, "Call to Arms", "Ice Age", "ICE");
  }
}

module.exports = CalltoArms;
