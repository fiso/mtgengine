"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherealUsher extends UnimplementedCard {
  constructor(game) {
    super(game, "Ethereal Usher", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = EtherealUsher;
