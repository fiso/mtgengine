"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuildscornWard extends UnimplementedCard {
  constructor(game) {
    super(game, "Guildscorn Ward", "Gatecrash", "GTC");
  }
}

module.exports = GuildscornWard;
