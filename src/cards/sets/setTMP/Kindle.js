"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kindle extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindle", "Tempest", "TMP");
  }
}

module.exports = Kindle;
