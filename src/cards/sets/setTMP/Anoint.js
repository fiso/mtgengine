"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anoint extends UnimplementedCard {
  constructor (game) {
    super(game, "Anoint", "Tempest", "TMP");
  }
}

module.exports = Anoint;
