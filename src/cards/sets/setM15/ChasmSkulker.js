"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChasmSkulker extends UnimplementedCard {
  constructor (game) {
    super(game, "Chasm Skulker", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ChasmSkulker;
