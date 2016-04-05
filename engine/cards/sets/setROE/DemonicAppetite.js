"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicAppetite extends UnimplementedCard {
  constructor(game) {
    super(game, "Demonic Appetite", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DemonicAppetite;
