"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BirthingPod extends UnimplementedCard {
  constructor(game) {
    super(game, "Birthing Pod", "New Phyrexia", "NPH");
  }
}

module.exports = BirthingPod;
