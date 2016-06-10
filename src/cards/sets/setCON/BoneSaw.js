"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneSaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Saw", "Conflux", "CON");
  }
}

module.exports = BoneSaw;
