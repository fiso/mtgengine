"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagneticWeb extends UnimplementedCard {
  constructor (game) {
    super(game, "Magnetic Web", "Tempest", "TMP");
  }
}

module.exports = MagneticWeb;
