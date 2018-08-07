"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziSkyspawner extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Skyspawner", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EldraziSkyspawner;
