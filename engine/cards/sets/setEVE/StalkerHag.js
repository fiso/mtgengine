"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalkerHag extends UnimplementedCard {
  constructor(game) {
    super(game, "Stalker Hag", "Eventide", "EVE");
  }
}

module.exports = StalkerHag;
