"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeetheUnwritten extends Card {
  constructor(game) {
    super(game, "See the Unwritten", "Khans of Tarkir", "KTK");
  }
}

module.exports = SeetheUnwritten;
