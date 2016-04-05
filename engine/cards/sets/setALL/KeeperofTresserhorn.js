"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeperofTresserhorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Keeper of Tresserhorn", "Alliances", "ALL");
  }
}

module.exports = KeeperofTresserhorn;
