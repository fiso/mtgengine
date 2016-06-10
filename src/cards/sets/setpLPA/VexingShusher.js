"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VexingShusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Vexing Shusher", "Launch Parties", "pLPA");
  }
}

module.exports = VexingShusher;
