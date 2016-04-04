"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TopplegeistBase = require("../setDDQ/Topplegeist.js");

class Topplegeist extends TopplegeistBase {
  constructor(game) {
    super(game, "Topplegeist", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Topplegeist;
