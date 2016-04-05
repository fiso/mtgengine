"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrganGrinder extends UnimplementedCard {
  constructor(game) {
    super(game, "Organ Grinder", "Torment", "TOR");
  }
}

module.exports = OrganGrinder;
