"use strict";
const Constants = require ("../../../Constants");
const CoatofArmsBase = require("../setDDS/CoatofArms");

class CoatofArms extends CoatofArmsBase {
  constructor (game) {
    super(game, "Coat of Arms", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = CoatofArms;
