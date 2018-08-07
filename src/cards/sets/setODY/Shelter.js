"use strict";
const Constants = require ("../../../Constants");
const ShelterBase = require("../setEMA/Shelter");

class Shelter extends ShelterBase {
  constructor (game) {
    super(game, "Shelter", "Odyssey", "ODY");
  }
}

module.exports = Shelter;
