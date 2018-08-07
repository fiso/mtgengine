"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloudManta extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloud Manta", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CloudManta;
