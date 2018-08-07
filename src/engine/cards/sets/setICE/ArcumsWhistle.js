"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcumsWhistle extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcum's Whistle", "Ice Age", "ICE");
  }
}

module.exports = ArcumsWhistle;
