"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenHeretic extends UnimplementedCard {
  constructor (game) {
    super(game, "Thraben Heretic", "Dark Ascension", "DKA");
  }
}

module.exports = ThrabenHeretic;
