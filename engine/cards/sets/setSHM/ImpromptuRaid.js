"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpromptuRaid extends UnimplementedCard {
  constructor(game) {
    super(game, "Impromptu Raid", "Shadowmoor", "SHM");
  }
}

module.exports = ImpromptuRaid;
