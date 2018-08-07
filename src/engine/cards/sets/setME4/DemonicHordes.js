"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicHordes extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonic Hordes", "Masters Edition IV", "ME4");
  }
}

module.exports = DemonicHordes;
