"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenerableKumo extends UnimplementedCard {
  constructor (game) {
    super(game, "Venerable Kumo", "Champions of Kamigawa", "CHK");
  }
}

module.exports = VenerableKumo;
