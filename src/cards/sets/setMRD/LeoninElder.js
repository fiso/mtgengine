"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Leonin Elder", "Mirrodin", "MRD");
  }
}

module.exports = LeoninElder;
