"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrownerInitiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Drowner Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = DrownerInitiate;
