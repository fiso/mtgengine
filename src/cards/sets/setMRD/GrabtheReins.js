"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrabtheReins extends UnimplementedCard {
  constructor (game) {
    super(game, "Grab the Reins", "Mirrodin", "MRD");
  }
}

module.exports = GrabtheReins;
