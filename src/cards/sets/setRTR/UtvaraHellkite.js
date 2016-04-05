"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UtvaraHellkite extends UnimplementedCard {
  constructor(game) {
    super(game, "Utvara Hellkite", "Return to Ravnica", "RTR");
  }
}

module.exports = UtvaraHellkite;
