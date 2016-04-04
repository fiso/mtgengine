"use strict";
const Constants = require ("../../../Constants");
const ShelterBase = require("../setODY/Shelter");

class Shelter extends ShelterBase {
  constructor(game) {
    super(game, "Shelter", "Vintage Masters", "VMA");
  }
}

module.exports = Shelter;
