"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldmageElder extends Card {
  constructor(game) {
    super(game, "Shieldmage Elder", "Onslaught", "ONS");
  }
}

module.exports = ShieldmageElder;
