"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlickerformBase = require("../setC13/Flickerform.js");

class Flickerform extends FlickerformBase {
  constructor(game) {
    super(game, "Flickerform", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Flickerform;
