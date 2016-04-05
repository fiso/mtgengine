"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VillageIronsmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Village Ironsmith", "Innistrad", "ISD");
  }
}

module.exports = VillageIronsmith;
