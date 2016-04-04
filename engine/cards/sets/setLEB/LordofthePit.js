"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LordofthePitBase = require("../setCED/LordofthePit.js");

class LordofthePit extends LordofthePitBase {
  constructor(game) {
    super(game, "Lord of the Pit", "Limited Edition Beta", "LEB");
  }
}

module.exports = LordofthePit;
