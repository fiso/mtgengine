"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoratamiMirrorGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Soratami Mirror-Guard", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SoratamiMirrorGuard;
