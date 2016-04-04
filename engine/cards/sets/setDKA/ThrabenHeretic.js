"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrabenHeretic extends Card {
  constructor(game) {
    super(game, "Thraben Heretic", "Dark Ascension", "DKA");
  }
}

module.exports = ThrabenHeretic;
