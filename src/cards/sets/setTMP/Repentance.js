"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Repentance extends UnimplementedCard {
  constructor (game) {
    super(game, "Repentance", "Tempest", "TMP");
  }
}

module.exports = Repentance;
