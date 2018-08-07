"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Icequake extends UnimplementedCard {
  constructor (game) {
    super(game, "Icequake", "Masters Edition II", "ME2");
  }
}

module.exports = Icequake;
