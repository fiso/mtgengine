"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicHordes extends UnimplementedCard {
  constructor(game) {
    super(game, "Demonic Hordes", "Collector's Edition", "CED");
  }
}

module.exports = DemonicHordes;
