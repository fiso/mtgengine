"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmblemoftheWarmind extends UnimplementedCard {
  constructor (game) {
    super(game, "Emblem of the Warmind", "Future Sight", "FUT");
  }
}

module.exports = EmblemoftheWarmind;
