"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NipGwyllion extends UnimplementedCard {
  constructor (game) {
    super(game, "Nip Gwyllion", "Eventide", "EVE");
  }
}

module.exports = NipGwyllion;
