"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrabtheReins extends UnimplementedCard {
  constructor (game) {
    super(game, "Grab the Reins", "Commander 2016", "C16");
  }
}

module.exports = GrabtheReins;
