"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovEuthanist extends UnimplementedCard {
  constructor(game) {
    super(game, "Orzhov Euthanist", "Guildpact", "GPT");
  }
}

module.exports = OrzhovEuthanist;
