"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MountainYeti extends Card {
  constructor(game) {
    super(game, "Mountain Yeti", "Chronicles", "CHR");
  }
}

module.exports = MountainYeti;
