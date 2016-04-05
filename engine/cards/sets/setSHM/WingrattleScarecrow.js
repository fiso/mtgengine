"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingrattleScarecrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Wingrattle Scarecrow", "Shadowmoor", "SHM");
  }
}

module.exports = WingrattleScarecrow;
