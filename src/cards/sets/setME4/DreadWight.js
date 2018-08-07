"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadWight extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Wight", "Masters Edition IV", "ME4");
  }
}

module.exports = DreadWight;
