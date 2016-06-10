"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuriokTransfixer extends UnimplementedCard {
  constructor (game) {
    super(game, "Auriok Transfixer", "Mirrodin", "MRD");
  }
}

module.exports = AuriokTransfixer;
