"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltingSkin extends Card {
  constructor(game) {
    super(game, "Molting Skin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MoltingSkin;
