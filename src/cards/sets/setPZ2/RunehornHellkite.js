"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunehornHellkite extends UnimplementedCard {
  constructor (game) {
    super(game, "Runehorn Hellkite", "You Make the Cube", "PZ2");
  }
}

module.exports = RunehornHellkite;
