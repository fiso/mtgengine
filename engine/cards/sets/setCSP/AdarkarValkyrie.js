"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdarkarValkyrie extends Card {
  constructor(game) {
    super(game, "Adarkar Valkyrie", "Coldsnap", "CSP");
  }
}

module.exports = AdarkarValkyrie;
