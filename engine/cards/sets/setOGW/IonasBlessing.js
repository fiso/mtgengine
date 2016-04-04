"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IonasBlessing extends Card {
  constructor(game) {
    super(game, "Iona's Blessing", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = IonasBlessing;
