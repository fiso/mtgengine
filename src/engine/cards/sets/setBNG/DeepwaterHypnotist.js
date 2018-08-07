"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepwaterHypnotist extends UnimplementedCard {
  constructor (game) {
    super(game, "Deepwater Hypnotist", "Born of the Gods", "BNG");
  }
}

module.exports = DeepwaterHypnotist;
