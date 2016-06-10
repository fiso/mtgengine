"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbzanBattlePriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Abzan Battle Priest", "Khans of Tarkir", "KTK");
  }
}

module.exports = AbzanBattlePriest;
