"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonHellkite extends UnimplementedCard {
  constructor(game) {
    super(game, "Crimson Hellkite", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CrimsonHellkite;
