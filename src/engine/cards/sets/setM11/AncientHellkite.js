"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientHellkite extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Hellkite", "Magic 2011", "M11");
  }
}

module.exports = AncientHellkite;
