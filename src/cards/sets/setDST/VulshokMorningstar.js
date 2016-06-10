"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulshokMorningstar extends UnimplementedCard {
  constructor (game) {
    super(game, "Vulshok Morningstar", "Darksteel", "DST");
  }
}

module.exports = VulshokMorningstar;
