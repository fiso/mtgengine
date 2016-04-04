"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaidBombardment extends UnimplementedCard {
  constructor(game) {
    super(game, "Raid Bombardment", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RaidBombardment;
