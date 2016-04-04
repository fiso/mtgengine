"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrailofMystery extends Card {
  constructor(game) {
    super(game, "Trail of Mystery", "Khans of Tarkir", "KTK");
  }
}

module.exports = TrailofMystery;
