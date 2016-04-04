"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicAttorney extends Card {
  constructor(game) {
    super(game, "Demonic Attorney", "Collector's Edition", "CED");
  }
}

module.exports = DemonicAttorney;
