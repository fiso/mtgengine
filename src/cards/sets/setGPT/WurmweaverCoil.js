"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WurmweaverCoil extends UnimplementedCard {
  constructor (game) {
    super(game, "Wurmweaver Coil", "Guildpact", "GPT");
  }
}

module.exports = WurmweaverCoil;
