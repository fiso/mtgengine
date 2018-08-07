"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeopardSpottedJiao extends UnimplementedCard {
  constructor (game) {
    super(game, "Leopard-Spotted Jiao", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = LeopardSpottedJiao;
