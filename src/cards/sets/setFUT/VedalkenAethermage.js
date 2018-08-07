"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenAethermage extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Aethermage", "Future Sight", "FUT");
  }
}

module.exports = VedalkenAethermage;
