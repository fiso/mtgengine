"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampofApproval extends UnimplementedCard {
  constructor (game) {
    super(game, "Stamp of Approval", "Unstable", "UST");
  }
}

module.exports = StampofApproval;
