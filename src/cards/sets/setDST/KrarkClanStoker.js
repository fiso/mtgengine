"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrarkClanStoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Krark-Clan Stoker", "Darksteel", "DST");
  }
}

module.exports = KrarkClanStoker;
