"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildbloodPack extends UnimplementedCard {
  constructor (game) {
    super(game, "Wildblood Pack", "Innistrad", "ISD");
  }
}

module.exports = WildbloodPack;
