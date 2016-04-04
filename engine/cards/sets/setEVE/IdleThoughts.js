"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IdleThoughts extends UnimplementedCard {
  constructor(game) {
    super(game, "Idle Thoughts", "Eventide", "EVE");
  }
}

module.exports = IdleThoughts;
