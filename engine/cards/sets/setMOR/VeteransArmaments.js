"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteransArmaments extends UnimplementedCard {
  constructor(game) {
    super(game, "Veteran's Armaments", "Morningtide", "MOR");
  }
}

module.exports = VeteransArmaments;
