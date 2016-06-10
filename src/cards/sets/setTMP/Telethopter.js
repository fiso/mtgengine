"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Telethopter extends UnimplementedCard {
  constructor (game) {
    super(game, "Telethopter", "Tempest", "TMP");
  }
}

module.exports = Telethopter;
