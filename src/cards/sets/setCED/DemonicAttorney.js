"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicAttorney extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonic Attorney", "Collector's Edition", "CED");
  }
}

module.exports = DemonicAttorney;
