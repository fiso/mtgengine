"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReliefCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Relief Captain", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ReliefCaptain;
