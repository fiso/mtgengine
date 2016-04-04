"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CranialArchive extends Card {
  constructor(game) {
    super(game, "Cranial Archive", "Khans of Tarkir", "KTK");
  }
}

module.exports = CranialArchive;
