"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeteorStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Meteor Storm", "Invasion", "INV");
  }
}

module.exports = MeteorStorm;
