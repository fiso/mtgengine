"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeraldofAnafenza extends Card {
  constructor(game) {
    super(game, "Herald of Anafenza", "Khans of Tarkir", "KTK");
  }
}

module.exports = HeraldofAnafenza;
