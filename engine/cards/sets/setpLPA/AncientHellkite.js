"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientHellkite extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancient Hellkite", "Launch Parties", "pLPA");
  }
}

module.exports = AncientHellkite;
