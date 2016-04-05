"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofMalice extends UnimplementedCard {
  constructor(game) {
    super(game, "Temple of Malice", "Born of the Gods", "BNG");
  }
}

module.exports = TempleofMalice;
