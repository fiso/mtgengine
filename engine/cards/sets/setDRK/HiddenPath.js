"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenPath extends Card {
  constructor(game) {
    super(game, "Hidden Path", "The Dark", "DRK");
  }
}

module.exports = HiddenPath;
