"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonsPresence extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon's Presence", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = DragonsPresence;
