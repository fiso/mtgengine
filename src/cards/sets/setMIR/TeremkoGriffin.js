"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeremkoGriffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Teremko Griffin", "Mirage", "MIR");
  }
}

module.exports = TeremkoGriffin;
