"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerenityBase = require("../set6ED/Serenity.js");

class Serenity extends SerenityBase {
  constructor(game) {
    super(game, "Serenity", "Weatherlight", "WTH");
  }
}

module.exports = Serenity;
