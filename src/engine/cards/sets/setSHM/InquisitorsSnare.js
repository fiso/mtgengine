"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InquisitorsSnare extends UnimplementedCard {
  constructor (game) {
    super(game, "Inquisitor's Snare", "Shadowmoor", "SHM");
  }
}

module.exports = InquisitorsSnare;
