"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Morselhoarder extends UnimplementedCard {
  constructor(game) {
    super(game, "Morselhoarder", "Shadowmoor", "SHM");
  }
}

module.exports = Morselhoarder;
