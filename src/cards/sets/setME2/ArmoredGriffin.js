"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Armored Griffin", "Masters Edition II", "ME2");
  }
}

module.exports = ArmoredGriffin;
