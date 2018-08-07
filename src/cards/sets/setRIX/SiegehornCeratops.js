"use strict";
const Constants = require ("../../../Constants");
const SiegehornCeratopsBase = require("../setPRIX/SiegehornCeratops");

class SiegehornCeratops extends SiegehornCeratopsBase {
  constructor (game) {
    super(game, "Siegehorn Ceratops", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SiegehornCeratops;
