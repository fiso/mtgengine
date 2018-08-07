"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EdificeofAuthority extends UnimplementedCard {
  constructor (game) {
    super(game, "Edifice of Authority", "Amonkhet", "AKH");
  }
}

module.exports = EdificeofAuthority;
