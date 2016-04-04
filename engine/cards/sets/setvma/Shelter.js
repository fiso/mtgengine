"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShelterBase = require("../setODY/Shelter.js");

class Shelter extends ShelterBase {
  constructor(game) {
    super(game, "Shelter", "Vintage Masters", "VMA");
  }
}

module.exports = Shelter;
