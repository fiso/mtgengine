"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShelteringAncient extends UnimplementedCard {
  constructor(game) {
    super(game, "Sheltering Ancient", "Coldsnap", "CSP");
  }
}

module.exports = ShelteringAncient;
