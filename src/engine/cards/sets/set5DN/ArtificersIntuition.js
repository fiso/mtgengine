"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtificersIntuition extends UnimplementedCard {
  constructor (game) {
    super(game, "Artificer's Intuition", "Fifth Dawn", "5DN");
  }
}

module.exports = ArtificersIntuition;
