"use strict";
const Constants = require ("../../../Constants");
const DesecrationDemonBase = require("../setMM3/DesecrationDemon");

class DesecrationDemon extends DesecrationDemonBase {
  constructor (game) {
    super(game, "Desecration Demon", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = DesecrationDemon;
