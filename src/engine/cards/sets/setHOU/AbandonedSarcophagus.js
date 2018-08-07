"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbandonedSarcophagus extends UnimplementedCard {
  constructor (game) {
    super(game, "Abandoned Sarcophagus", "Hour of Devastation", "HOU");
  }
}

module.exports = AbandonedSarcophagus;
