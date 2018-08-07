"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloudDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloud Dragon", "Masters Edition IV", "ME4");
  }
}

module.exports = CloudDragon;
