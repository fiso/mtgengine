"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingmateRoc extends UnimplementedCard {
  constructor(game) {
    super(game, "Wingmate Roc", "Khans of Tarkir", "KTK");
  }
}

module.exports = WingmateRoc;
