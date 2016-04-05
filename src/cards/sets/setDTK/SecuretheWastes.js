"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecuretheWastes extends UnimplementedCard {
  constructor(game) {
    super(game, "Secure the Wastes", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SecuretheWastes;
