"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Legerdemain extends UnimplementedCard {
  constructor (game) {
    super(game, "Legerdemain", "Tempest", "TMP");
  }
}

module.exports = Legerdemain;
