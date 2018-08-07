"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellweaverEternal extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellweaver Eternal", "Hour of Devastation", "HOU");
  }
}

module.exports = SpellweaverEternal;
