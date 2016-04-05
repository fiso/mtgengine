"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowLance extends UnimplementedCard {
  constructor(game) {
    super(game, "Shadow Lance", "Guildpact", "GPT");
  }
}

module.exports = ShadowLance;
