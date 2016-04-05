"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SakashimatheImpostor extends UnimplementedCard {
  constructor(game) {
    super(game, "Sakashima the Impostor", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SakashimatheImpostor;
