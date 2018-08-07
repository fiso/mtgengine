"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderInitiate extends UnimplementedCard {
  constructor (game) {
    super(game, "Smolder Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = SmolderInitiate;
