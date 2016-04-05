"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelDeceiver extends UnimplementedCard {
  constructor(game) {
    super(game, "Cruel Deceiver", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CruelDeceiver;
