"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeilofSecrecy extends UnimplementedCard {
  constructor(game) {
    super(game, "Veil of Secrecy", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = VeilofSecrecy;
