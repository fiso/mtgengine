"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranHomeGuardBase = require("../setALL/KjeldoranHomeGuard.js");

class KjeldoranHomeGuard extends KjeldoranHomeGuardBase {
  constructor(game) {
    super(game, "Kjeldoran Home Guard", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = KjeldoranHomeGuard;
