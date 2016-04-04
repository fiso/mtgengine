"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeteorStorm extends Card {
  constructor(game) {
    super(game, "Meteor Storm", "Invasion", "INV");
  }
}

module.exports = MeteorStorm;
