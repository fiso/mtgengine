"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarkshellBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Barkshell Blessing", "Shadowmoor", "SHM");
  }
}

module.exports = BarkshellBlessing;
