"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnomeballMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnomeball Machine", "Unstable", "UST");
  }
}

module.exports = GnomeballMachine;
