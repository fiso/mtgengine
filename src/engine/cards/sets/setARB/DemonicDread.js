"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicDread extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonic Dread", "Alara Reborn", "ARB");
  }
}

module.exports = DemonicDread;
