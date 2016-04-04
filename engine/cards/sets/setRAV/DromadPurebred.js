"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromadPurebred extends UnimplementedCard {
  constructor(game) {
    super(game, "Dromad Purebred", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DromadPurebred;
