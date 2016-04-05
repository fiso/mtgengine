"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicArmaments extends UnimplementedCard {
  constructor(game) {
    super(game, "Angelic Armaments", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelicArmaments;
