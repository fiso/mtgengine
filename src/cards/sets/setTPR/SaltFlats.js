"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaltFlats extends UnimplementedCard {
  constructor (game) {
    super(game, "Salt Flats", "Tempest Remastered", "TPR");
  }
}

module.exports = SaltFlats;
