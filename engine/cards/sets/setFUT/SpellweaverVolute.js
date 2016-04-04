"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellweaverVolute extends Card {
  constructor(game) {
    super(game, "Spellweaver Volute", "Future Sight", "FUT");
  }
}

module.exports = SpellweaverVolute;
