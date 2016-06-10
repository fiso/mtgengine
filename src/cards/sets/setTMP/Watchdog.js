"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Watchdog extends UnimplementedCard {
  constructor (game) {
    super(game, "Watchdog", "Tempest", "TMP");
  }
}

module.exports = Watchdog;
