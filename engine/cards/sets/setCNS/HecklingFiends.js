"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HecklingFiendsBase = require("../setDKA/HecklingFiends.js");

class HecklingFiends extends HecklingFiendsBase {
  constructor(game) {
    super(game, "Heckling Fiends", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = HecklingFiends;
