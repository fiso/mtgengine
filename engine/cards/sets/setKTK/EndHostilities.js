"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EndHostilities extends Card {
  constructor(game) {
    super(game, "End Hostilities", "Khans of Tarkir", "KTK");
  }
}

module.exports = EndHostilities;
