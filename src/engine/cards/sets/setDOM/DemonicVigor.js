"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicVigor extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonic Vigor", "Dominaria", "DOM");
  }
}

module.exports = DemonicVigor;
