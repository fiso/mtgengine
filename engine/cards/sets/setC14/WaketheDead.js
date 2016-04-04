"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaketheDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Wake the Dead", "Commander 2014", "C14");
  }
}

module.exports = WaketheDead;
