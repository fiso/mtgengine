"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WingsteedRider extends Card {
  constructor(game) {
    super(game, "Wingsteed Rider", "Theros", "THS");
  }
}

module.exports = WingsteedRider;
