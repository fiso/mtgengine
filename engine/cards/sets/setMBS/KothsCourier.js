"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KothsCourier extends Card {
  constructor(game) {
    super(game, "Koth's Courier", "Mirrodin Besieged", "MBS");
  }
}

module.exports = KothsCourier;
