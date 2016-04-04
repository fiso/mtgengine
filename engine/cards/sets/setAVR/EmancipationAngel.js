"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmancipationAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Emancipation Angel", "Avacyn Restored", "AVR");
  }
}

module.exports = EmancipationAngel;
