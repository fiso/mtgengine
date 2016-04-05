"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtbind extends UnimplementedCard {
  constructor(game) {
    super(game, "Thoughtbind", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Thoughtbind;
