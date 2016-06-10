"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShelteringWord extends UnimplementedCard {
  constructor (game) {
    super(game, "Sheltering Word", "Avacyn Restored", "AVR");
  }
}

module.exports = ShelteringWord;
