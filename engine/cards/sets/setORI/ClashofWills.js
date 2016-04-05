"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClashofWills extends UnimplementedCard {
  constructor(game) {
    super(game, "Clash of Wills", "Magic Origins", "ORI");
  }
}

module.exports = ClashofWills;
