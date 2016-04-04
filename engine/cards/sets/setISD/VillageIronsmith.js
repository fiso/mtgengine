"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VillageIronsmith extends Card {
  constructor(game) {
    super(game, "Village Ironsmith", "Innistrad", "ISD");
  }
}

module.exports = VillageIronsmith;
