"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderousRedcapAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Murderous Redcap Avatar", "Vanguard", "VAN");
  }
}

module.exports = MurderousRedcapAvatar;
