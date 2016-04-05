"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvengingAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Avenging Angel", "Tempest", "TMP");
  }
}

module.exports = AvengingAngel;
