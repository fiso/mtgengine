"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrenzosCutthroat extends UnimplementedCard {
  constructor (game) {
    super(game, "Grenzo's Cutthroat", "Conspiracy", "CNS");
  }
}

module.exports = GrenzosCutthroat;
