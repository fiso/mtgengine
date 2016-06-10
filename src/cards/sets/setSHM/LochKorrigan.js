"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LochKorrigan extends UnimplementedCard {
  constructor (game) {
    super(game, "Loch Korrigan", "Shadowmoor", "SHM");
  }
}

module.exports = LochKorrigan;
