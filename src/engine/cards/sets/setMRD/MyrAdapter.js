"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrAdapter extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Adapter", "Mirrodin", "MRD");
  }
}

module.exports = MyrAdapter;
