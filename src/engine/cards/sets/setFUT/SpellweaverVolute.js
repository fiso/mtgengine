"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellweaverVolute extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellweaver Volute", "Future Sight", "FUT");
  }
}

module.exports = SpellweaverVolute;
