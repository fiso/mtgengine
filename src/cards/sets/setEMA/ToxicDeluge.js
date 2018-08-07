"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToxicDeluge extends UnimplementedCard {
  constructor (game) {
    super(game, "Toxic Deluge", "Eternal Masters", "EMA");
  }
}

module.exports = ToxicDeluge;
