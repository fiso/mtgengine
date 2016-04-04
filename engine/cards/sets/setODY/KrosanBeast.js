"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanBeast extends Card {
  constructor(game) {
    super(game, "Krosan Beast", "Odyssey", "ODY");
  }
}

module.exports = KrosanBeast;
