"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IonasBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Iona's Blessing", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = IonasBlessing;
