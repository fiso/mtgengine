"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneSaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Saw", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BoneSaw;
