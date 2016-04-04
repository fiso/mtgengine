"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrbisProtector extends UnimplementedCard {
  constructor(game) {
    super(game, "Urbis Protector", "Gatecrash", "GTC");
  }
}

module.exports = UrbisProtector;
