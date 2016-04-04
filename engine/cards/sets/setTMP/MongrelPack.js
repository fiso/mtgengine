"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MongrelPack extends Card {
  constructor(game) {
    super(game, "Mongrel Pack", "Tempest", "TMP");
  }
}

module.exports = MongrelPack;
